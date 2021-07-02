// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const helpers = require("handlebars-helpers");
hbs.registerHelper(helpers());

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const session = require("express-session");
const mongoStore = require("connect-mongo");

app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET, //this should be stored in .env for security measures
        cookie:{
            sameSite: true, //frontend + backend both run on localhost
            httpOnly: true, //cus we arent using https
            maxAge: 600000, //equals to session time ---- if u dont want a website that never expires, take this away 
        },
        rolling: true,
        store: new mongoStore({
            mongoUrl: process.env.MONGODB_URI,
            ttl: 60 * 60 * 24, //1 day
        })
    })
);
function getCurrentLoggedUser (req, res, next) {
    if (req.session && req.session.currentUser) {
        app.locals.loggedInUser = req.session.currentUser.username; //refer to the username in the model
    } else {
        app.locals.loggedInUser = "";
    }
    next();
};
app.use(getCurrentLoggedUser);

// default value for title local
const projectName = "Kilometro-Zero";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

const auth = require("./routes/auth");
app.use("/", auth);





// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

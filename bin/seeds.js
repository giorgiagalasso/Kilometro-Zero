const mongoose = require("mongoose");
//const Book = require("../models/Book.model");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/Kilometro-Zero";
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
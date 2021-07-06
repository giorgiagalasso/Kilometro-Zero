const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const fileUpload = require("../config/cloudinary");

function requireAdmin(req, res, next) {  
    if (req.session.currentUser && 
        req.session.currentUser.role === "Admin"){
            next();
    } else {
            res.redirect("/login");
    }
};

router.get("/profile", requireAdmin, (req, res) => {
    res.render ("user/profile");
});












module.exports = router;
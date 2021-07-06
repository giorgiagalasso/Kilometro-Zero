const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const fileUpload = require("../config/cloudinary");



router.get("/profile", (req, res) => {
    res.render ("user/profile");
});

router.get("/favourites", (req, res) => {
    res.render("user/favourites");

});












module.exports = router;
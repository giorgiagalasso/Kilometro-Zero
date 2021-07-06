const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const fileUpload = require("../config/cloudinary");
const FavouriteModel = require("../models/Favourite.model");



router.get("/profile", (req, res) => {
    res.render ("user/profile");
});

router.post("/favourites/:productId", async(req,res) => {
   await FavouriteModel.create({
        user: req.session.currentUser,
        product: req.params.productId
    }),
    res.redirect('/favourites')
});


router.get("/favourites", async (req, res) => {
    let favourites = await FavouriteModel.find({
        user: req.session.currentUser,
    }).populate('product');
    console.log(favourites);
    res.render("user/favourites", {
        favourites, 
        user:req.session.currentUser
    });

});












module.exports = router;
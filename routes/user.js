const router = require("express").Router();
const User = require("../models/User.model");
const Favourite = require("../models/Favourite.model");

function requireLogin(req, res, next) { 
    if (req.session.currentUser) {
        next();
    } else {
        res.redirect("/login")
    }
};

router.get("/profile", async (req, res) => {
    const userDetail = await User.findById(req.session.currentUser._id);
    res.render ("user/profile", {userDetail});
});

router.post("/favourites/:productId", async(req,res) => {
   await Favourite.create({
        user: req.session.currentUser,
        product: req.params.productId
    }),
    res.redirect('/favourites')
});


router.get("/favourites", async (req, res) => {
    let favourites = await Favourite.find({
        user: req.session.currentUser,
    }).populate('product');
    console.log(favourites);
    res.render("user/favourites", {
        favourites, 
        user:req.session.currentUser
    });

});

router.post("/favourites/:productId/delete", requireLogin, async (req, res) => {
    await Favourite.findByIdAndDelete(req.params.productId);
    res.redirect("/favourites");
});





module.exports = router;
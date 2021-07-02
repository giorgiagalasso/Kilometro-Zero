const express = require("express");
const router = express.Router();
const Product = require("../models/Product.model");
//const Author = require("../models/Author.model");
const fileUpload = require("../config/cloudinary");

function requireLogin(req, res, next) { 
    if (req.session.currentUser) {
        next();
    } else {
        res.redirect("/login")
    }
};


function requireAdmin(req, res, next) {  
    if (req.session.currentUser && 
        req.session.currentUser.role === "Admin"){
            next();
    } else {
            res.redirect("/login");
    }
}

router.get("/home", async (req, res) => {
    const products = await Product.find().sort({name: 1}); 
    res.render("products/homepage", { products });
});

router.get("/products/:productId", async (req, res) =>{
    const productDetail = await Product.findById(req.params.productId);
    res.render("products/product-detail", productDetail);
});


router.get("/product-create", requireAdmin, requireLogin, async (req, res) =>{
    const allProducts = await Product.find().sort({ name: 1});
    res.render("products/product-create", {allProducts});
});




module.exports = router;
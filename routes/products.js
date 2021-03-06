const router = require("express").Router();
const Product = require("../models/Product.model");
const User = require("../models/User.model");
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
            res.redirect("/");
    }
};


router.get("/productlist", requireAdmin, async (req, res) => {
    const products = await Product.find().sort({name: 1}); 
    res.render("products/product-list", { products });
});


router.get("/products/:productId", async (req, res) => {
    const productDetail = await Product.findById(req.params.productId);
    res.render("products/product-detail", productDetail);
});


router.get("/product-create", requireAdmin, async (req, res) => {
    const allProducts = await Product.find().sort({ name: 1});
    res.render("products/product-create", {allProducts});
});


router.post("/product-create", fileUpload.single("image"), async (req, res) => {
    let fileUrlOnCloudinary = ""; 
    if (req.file){
        fileUrlOnCloudinary = req.file.path;
    };
    
    const {name, category, description, rating, price, helpfulUrl} = req.body;
    await Product.create({
        name,
        category,
        description,
        rating,
        price, 
        helpfulUrl,
        imageUrl: fileUrlOnCloudinary,
    });
    res.redirect("/productlist");
});


router.get("/products/:productId/edit", requireAdmin, async (req, res) => {
    const productsToEdit = await Product.findById(req.params.productId);
    res.render("products/products-edit", {productsToEdit});
});


router.post("/products/:productId/edit", fileUpload.single("image"), async (req, res) => {
     
    const {name, category, description, rating, price, helpfulUrl} = req.body;

    if (req.file){
        let fileUrlOnCloudinary = req.file.path;
        await Product.findByIdAndUpdate(req.params.productId, {
            name,
            category,
            description,
            rating,
            price, 
            helpfulUrl,
            imageUrl: fileUrlOnCloudinary,
        });
    } else {
        await Product.findByIdAndUpdate(req.params.productId, {
            name,
            category,
            description,
            rating,
            price, 
            helpfulUrl,
        });
    }
   
    res.redirect("/productlist");
});


router.post("/products/:productId/delete", requireAdmin, async (req, res) => {
    await Product.findByIdAndDelete(req.params.productId);
    res.redirect("/productlist");
});


router.post("/reviews/:productId/add", requireLogin, async (req, res) => {
    const {username, comment} = req.body;
    await Product.findByIdAndUpdate(req.params.productId, {
        $push: {reviews: {username, comment}},
    });
    res.redirect(`/products/${req.params.productId}`)
});

router.get("/selfcare", async (req, res) => {
    const scProducts = await Product.find({category: "Self Care"}).sort({name: 1});
    res.render("products/self-care", {scProducts});

})

router.get("/togo", async (req, res) => {
    const toGo = await Product.find({category: "To Go"}).sort({name: 1});
    res.render("products/to-go", {toGo});

})

router.get("/ecohome", async (req, res) => {
    const ecoHome = await Product.find({category: "Eco Home"}).sort({name: 1});
    res.render("products/eco-home", {ecoHome});

})




module.exports = router;
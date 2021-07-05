const router = require("express").Router();
const express = require("express");
const Product = require("../models/Product.model");
router.get("/", async (req, res) => {
    const products = await Product.find().sort({name: 1}); 
    res.render("index", { products });
});
module.exports = router;
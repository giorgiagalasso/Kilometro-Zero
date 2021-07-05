const express = require("express");
const router = express.Router();

router.get("/tricksntips", async (req, res) => { 
    res.render("tips-tricks");
});

module.exports = router;
const express = require("express");
const router = express.Router();

// Load index page
// index page 
router.get("/", (req, res) => {
    res.render("pages/index");
});


module.exports = router;

const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt-nodejs");

// create new user
router.post("/api/register", (req, res) => {
    console.log(res);
});

module.exports = router;
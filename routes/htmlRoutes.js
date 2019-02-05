const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);
=======
>>>>>>> master

// Load index page
// index page 
router.get("/", (req, res) => {
<<<<<<< HEAD
    knex
        .select()
        .from("user")
        .then(results => res.render("pages/index", {users: results}));
=======
    res.render("pages/index");
>>>>>>> master
});


module.exports = router;

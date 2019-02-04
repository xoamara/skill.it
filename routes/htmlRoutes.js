const express = require("express");
const app = express();
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

// Load index page
// index page 
app.get("/", (req, res) => {
    res.render("pages/index");
});


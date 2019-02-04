require("dotenv").config();
const express = require("express");
const ejs = require("ejs");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// EJS

app.set("view engine", "ejs");

// index page 
app.get("/", (req, res) => {
    res.render("pages/index");
});

// Routes
const dataRoutes = require("./routes/dataRoutes");
app.use(dataRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
const ejs = require("ejs");

<<<<<<< HEAD
=======
const express = require("express");
>>>>>>> master
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

<<<<<<< HEAD
// index page 
app.get("/", (req, res) => {
    res.render("pages/index");
});

// Routes
const dataRoutes = require("./routes/dataRoutes");
app.use(dataRoutes);

app.listen(PORT, () => {
=======
const dataRoutes = require("./routes/dataRoutes");
app.use(dataRoutes);

app.listen(PORT, function() {
>>>>>>> master
    console.log(`Server listening on PORT ${PORT}`);
});
const path = require("path");
const router = require("express").Router();

// Home page
router.get("/", (req, res) => {
    res.render(path.join(__dirname, "../public/views/pages/index.ejs"));
});

// Send login page
router.get("/login", (req, res) => {

    // UPDATE THIS LATER ---------- Want to redirect users who are logged in

    // if (req.user) {
    //     res.redirect("/");
    // }
    res.render(path.join(__dirname, "../public/views/pages/login.ejs"));
});

// Signup a new user
router.get("/signup", (req, res) => {
    res.render(path.join(__dirname, "../public/views/pages/register.ejs"));
});

// Contact Page
router.get("/contact", (req, res) => {
    res.render(path.join(__dirname, "../public/views/pages/contact.ejs"));
});

// About skill.it
router.get("/about", (req, res) => {
    res.render(path.join(__dirname, "../public//views/pages/about.ejs"));
});

module.exports = router;
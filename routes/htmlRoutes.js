const path = require("path");
const router = require("express").Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");

// Home page
router.get("/", (req, res) => {
    res.render(path.join(__dirname, "../public/views/pages/index.ejs"));
});

// Send login page
router.get("/login", (req, res) => {
    if (req.user) {
        // Redirect to placeholder: See below
        res.redirect("/members");
    }
    res.render(path.join(__dirname, "../public/views/pages/login.ejs"));
});

// Signup a new user
router.get("/signup", (req, res) => {
    res.render(path.join(__dirname, "../public/views/pages/register.ejs"));
});

router.get("/contact", (req, res) => {
    res.render(path.join(__dirname, "../public/views/pages/contact.ejs"));
});

// About skill.it
router.get("/about", (req, res) => {
    res.render(path.join(__dirname, "../public//views/pages/about.ejs"));
});

// Placeholder -- model for routes that can only be accessed when the user is authenticated
router.get("/members", isAuthenticated, (req, res) => {
    res.render(path.join(__dirname, "../public/members.ejs"));
});

module.exports = router;
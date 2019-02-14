const path = require("path");
const router = require("express").Router();
const { isAuthenticated } = require("../config/middleware/isAuthenticated");

const dir = function(ejsFileName) {
    return path.join(__dirname, `../public/views/pages/${ejsFileName}`);
};

// Home page
router.get("/", (req, res) => {
    res.render(dir("index.ejs"));
});

// Send login page
router.get("/login", (req, res) => {

    // UPDATE THIS LATER ---------- Want to redirect users who are logged in

    // if (req.user) {
    //     res.redirect("/");
    // }
    res.render(dir("login.ejs"));
});

// Signup a new user
router.get("/signup", (req, res) => {
    res.render(dir("register.ejs"));
});

// Contact Page
router.get("/contact", (req, res) => {
    res.render(dir("contact.ejs"));
});

// Email skill.it user
router.get("/email", (req, res) => {
    res.render(dir("email.ejs"));
});

// About skill.it
router.get("/about", (req, res) => {
    res.render(dir("about.ejs"));
});

// Test route for ensuring Authentication
router.get("/testAuthed", isAuthenticated, (req, res) => {
    res.render(dir("test.ejs"));
});

// Welcomes the user and tells them if they are logged in
router.get("/testIfAuthed", (req, res) => {
    res.render(dir("testIf.ejs"));
});

module.exports = router;
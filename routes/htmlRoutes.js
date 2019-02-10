const path = require("path");
const router = require("express").Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");


// Home page
router.get("/", (req, res) => {
    // Renders the main page
    // const users = [{}];

    db.User 
        .findAll({
            include: [db.SkillToLearn, db.SkillToTeach]
        })
        .then(results => res.render(path.join(__dirname, "../public/views/pages/index.ejs"), {users: results}));

});

// Send login page
router.get("/login", (req, res) => {
    if (req.user) {

        // Redirect to placeholder: See below
        res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/views/pages/login.html"));
});

// Signup a new user
router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/pages/register.html"));
});

router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/pages/contact.html"));
});

// About skill.it
router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../public//views/pages/about.html"));
});


// Placeholder -- model for routes that can only be accessed when the user is authenticated
router.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
});


module.exports = router;
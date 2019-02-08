const path = require("path");
const router = require("express").Router();
// const knexConfig = require("../knexfile");
// const knex = require("knex")(knexConfig.development);

const isAuthenticated = require("../config/middleware/isAuthenticated");


/*
this needs to be fixed

Instead of sending signup.html, it should render the signup page
*/
router.get("/", (req, res) => {
    // if (req.user) {

    //     // Redirect to placeholder: See below
    //     // res.redirect("/members");
    //     res.render("../views/pages/index.ejs", {user: res.user});
    // }

    // Renders the main page
    const users = [{}];
    res.render(path.join(__dirname, "../views/pages/index.ejs"), {users: users});

});

/*
this needs to be fixed

Instead of sending login.html, it should render the login page
*/
router.get("/login", (req, res) => {
    if (req.user) {

        // Redirect to placeholder: See below
        res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
});

// Signup a new user
router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/pages/createUser.html"));
});

// Placeholder -- model for routes that can only be accessed when the user is authenticated
router.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
});

module.exports = router;
const db = require("../models");
const passport = require("../config/passport");

const router = require("express").Router();

// route for loggin in
router.post("/login", passport.authenticate("local"), (req, res) => {
    res.json("/members");
});

// route for signing up
router.post("/register", (req, res) => {
    db.User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }).then(() => {
        res.redirect(307, "/login"); // automatically login after signup
    }).catch(err => {
        console.log(err);
        res.json(err);
    });
});

// route for logging out
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/"); // redirect to home page
});

module.exports = router;
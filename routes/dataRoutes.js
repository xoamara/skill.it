const express = require("express");
const router = express.Router();

const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

/*
    User-related Routes
*/

// get all users
router.get("/api/users", (req, res) => {
    knex
        .select()
        .from("user")
        .then(results => res.json(results));
});

// get a specific user
router.get("/api/users/:id", (req, res) => {
    knex
        .select()
        .from("user")
        .where({
            id: req.params.id
        })
        .then(results => res.json(results));
});

/*
    Skill-related Routes
*/

// get all skills
router.get("/api/skills", (req, res) => {
    knex
        .select()
        .from("skill")
        .then(results => res.json(results));
});

// get all skills a specific user wants to learn
router.get("/api/users/:id/learn", (req, res) => {
    knex
        .select()
        .from("skillsToLearn")
        .where({
            userId: req.params.id
        })
        .then(results => res.json(results));
});

// get all skills a specific user wants to teach
router.get("/api/users/:id/teach", (req, res) => {
    knex
        .select()
        .from("skillsToTeach")
        .where({
            userId: req.params.id
        })
        .then(results => res.json(results));
});

module.exports = router;
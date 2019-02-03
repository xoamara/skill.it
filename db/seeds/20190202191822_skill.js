exports.seed = function (knex) {
    return knex("skill").del()
        .then(() => {
            return knex("skill").insert([
                { id: 1, skill: "arts" },
                { id: 2, skill: "cooking" },
                { id: 3, skill: "dance" },
                { id: 4, skill: "foreign language" },
                { id: 5, skill: "music" },
                { id: 6, skill: "software development" },
                { id: 7, skill: "sports" }
            ]);
        });
};
exports.seed = function (knex) {
    return knex("user").del()
        .then(() => {
            return knex("user").insert([
                {
                    id: 1,
                    username: "tiffanywang",
                    email: "tiffany.wang@gmail.com",
                    description: ""
                },
                {
                    id: 2,
                    username: "josemendoza",
                    email: "jose.mendoza@yahoo.com",
                    description: ""
                },
                {
                    id: 3,
                    username: "kenjikaneko",
                    email: "kenji.kaneko@outlook.com",
                    description: ""
                },
                {
                    id: 4,
                    username: "anushreechopra",
                    email: "anushree.chopra@yahoo.com",
                    description: ""
                },
                {
                    id: 5,
                    username: "erinstark",
                    email: "erin.stark@gmail.com",
                    description: ""
                },
                {
                    id: 6,
                    username: "andreidimov",
                    email: "andrei.dimov@gmail.com",
                    description: ""
                },
                {
                    id: 7,
                    username: "audreyan",
                    email: "audrey.an@gmail.com",
                    description: ""
                },
                {
                    id: 8,
                    username: "mattrice",
                    email: "matt.rice@outlook.com",
                    description: ""
                },
                {
                    id: 9,
                    username: "juliaosadzinski",
                    email: "julia.osadzinski@outlook.com",
                    description: ""
                },
                {
                    id: 10,
                    username: "drewkane",
                    email: "drew.kane@yahoo.com",
                    description: ""
                }
            ]);
        });
};
exports.seed = function (knex) {
    return knex("password").del()
        .then(() => {
            return knex("password").insert([
                { userId: 1, password: "L1@wbst" },
                { userId: 2, password: "t1ju4n@" },
                { userId: 3, password: "k4n3k0415" },
                { userId: 4, password: "19ac96!!" },
                { userId: 5, password: "j0n15m1n3" },
                { userId: 6, password: "r3dp3nd@" },
                { userId: 7, password: "06dr3y1995" },
                { userId: 8, password: "Z1pL1n1ng!!" },
                { userId: 9, password: "0mgSO4wsum" },
                { userId: 10, password: "z1lch2S@Y" }
            ]);
        });
};
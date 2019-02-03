exports.up = function(knex) {
    return knex.schema.createTable("password", (table) => {
        table.integer("userId").unsigned().notNullable();
        table.string("password").notNullable();
        table.foreign("userId").references("user.id");
        table.primary("userId", "password");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("password");
};
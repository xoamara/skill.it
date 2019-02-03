exports.up = function(knex) {
    return knex.schema.createTable("skill", (table) => {
        table.increments();
        table.string("skill").notNullable().unique();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("skill");
};
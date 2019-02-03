exports.up = function(knex) {
    return knex.schema.createTable("skillsToTeach", (table) => {
        table.integer("userId").unsigned().notNullable();
        table.integer("skillId").unsigned().notNullable();
        table.foreign("userId").references("user.id");
        table.foreign("skillId").references("skill.id");
        table.primary(["userId", "skillId"]);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("skillsToTeach");
};
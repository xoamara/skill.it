"use strict";

module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define("Skill", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        freezeTableName: true
    });

    Skill.associate = function (models) {
        Skill.hasMany(models.SkillToLearn, {
            as: "usersLearning",
            onDelete: "cascade",
            foreignKey: "skillId",
            sourceKey: "id"
        });

        Skill.hasMany(models.SkillToTeach, {
            as: "usersTeaching",
            onDelete: "cascade",
            foreignKey: "skillId",
            sourceKey: "id"
        });
    };

    return Skill;
};
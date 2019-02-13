module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        }
    }, {
        freezeTableName: true
    });

    User.associate = function (models) {
        User.hasMany(models.SkillToLearn, {
            as: "skillsLearning",
            onDelete: "cascade",
            foreignKey: "userId",
            sourceKey: "id"
        });

        User.hasMany(models.SkillToTeach, {
            as: "skillsTeaching",
            onDelete: "cascade",
            foreignKey: "userId",
            sourceKey: "id"
        });
    };
    
    return User;
};
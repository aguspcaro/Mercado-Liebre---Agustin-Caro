module.exports = function(sequelize, dataTypes) {

    let alias = "Profile";
    
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        age: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        birthday: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
};

    let config = {

        tableName: "profiles",
        timestamp: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    };

    let Profile = sequelize.define(alias, cols, config);


    Profile.associate = function(models) {
        Profile.belongsTo(models.User, {

            as: "user",
            foreignKey: "user_id"
        })
    }
    return Profile;
}


module.exports = function(sequelize, dataTypes) {

    let alias = "User"; 
    
    let cols = { 

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
           
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false,
            
        }
    };

    let config = { 

        tableName: "users",
        timestamp: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    };

    let User = sequelize.define(alias, cols, config); 

    User.associate = function(models) {
        User.hasOne(models.Profile, {
            as: "profile",
            foreignKey: "user_id"
        }),
        User.hasMany(models.Cart, {
            as: "carts",
            foreignKey: "user_id"
        })
        
    }

    return User; 


}
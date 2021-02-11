module.exports =  function(sequelize, dataTypes){

    let alias = "Sports";

    let cols={

        id:{
            type : dataTypes.INTEGER ,  
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type : dataTypes.STRING(100),
        },

        }
        let config = {
            tableName: "sports",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at", 
            paranoid: true
        }

    let Sports = sequelize.define(alias, cols, config);

    Sports.associate = function(models){
            
        Sports.hasMany(models.Products, {
      
            as: "products", 
            foreignKey: "sport_id"
        })
    }

    return Sports;


}
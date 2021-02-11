module.exports =  function(sequelize, dataTypes){

    let alias = "Brand";

    let cols={

        id:{
            type : dataTypes.INTEGER ,  
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type : dataTypes.STRING(100),
            allowNull: false
        },

        }
        let config = {
            tableName: "brands",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at", 
            paranoid: true
    }

    let Brand = sequelize.define(alias, cols, config);

    Brand.associate = function(models){
            
        Brand.hasMany(models.Product, {
      
            as: "brand",
            foreignKey: "brand_id"
        })
    }

 

    return Brand;


}
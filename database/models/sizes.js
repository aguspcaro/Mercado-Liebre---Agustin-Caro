module.exports =  function(sequelize, dataTypes){

    let alias = "Size";

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
            tableName: "sizes",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
            paranoid: true
    }

    let Size = sequelize.define(alias, cols, config);

    Size.associate = function(models){
            
        Size.hasMany(models.Product, {
      
            as: "product",
            foreignKey: "size_id"
        })
    }

 

    return Size;


}
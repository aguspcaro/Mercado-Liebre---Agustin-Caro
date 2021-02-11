module.exports =  function(sequelize, dataTypes){

    let alias = "Product";

    let cols={

        id:{
            type : dataTypes.INTEGER ,  
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type : dataTypes.STRING(100),
            allowNull: false
        },

        description:{ 
            type : dataTypes.STRING(255),
            allowNull: false
        },

        image:{ 
            type : dataTypes.STRING(100),
            allowNull: false
        },

        stock:{ 
            type : dataTypes.INTEGER,
            allowNull: false
        },

        category:{ 
            type : dataTypes.STRING(50),
            allowNull: false
        },
        
        public:{ 
            type : dataTypes.STRING(50),
            allowNull: false
        },

        shipping:{ 
            type : dataTypes.STRING(50),
            allowNull: false
        },
        price:{ 
            type : dataTypes.FLOAT(7,2)
        },
        
        promPrice:{ 
            type : dataTypes.FLOAT(7,2)
        },

        size_id:{ 
            type : dataTypes.INTEGER,
            
        },
        
        brand_id:{ 
            type : dataTypes.INTEGER,
           
        }


        }
        let config = {
            tableName: "products",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
            paranoid: true
    }

    let Product = sequelize.define(alias, cols, config);


    Product.associate = function(models){
            
        Product.belongsTo(models.Size, {
        
            as: "size",
            foreignKey: "size_id"
        }),

        Product.belongsTo(models.Brand, {
        
            as: "brand",
            foreignKey: "brand_id"
        })


    }    
    
    return Product;

}

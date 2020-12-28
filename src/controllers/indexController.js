let indexController = {
    
    index : function (req, res) {
        res.render("index")
    },

    buscar : function(req, res) {
        let loQueBuscoElUsuario = req.query.homeBuscar;
        
        let productos = [
            {id: 1, name: "Botines"},
            {id: 2, name: "Zapatillas"},
            {id: 3, name: "Remeras,"},
            {id: 4, name: "Pelotas"},
            {id: 5, name: "autos"},
            {id: 6, name: "casas"}

        ];
        let homeBuscarResultado = [];
        for(let i = 0; i < productos.lenght; i++){

            if(productos[i].name.includes(loQueBuscoElUsuario)){
                homeBuscarResultado.push(productos[i])
                
            }

        }
        res.render("resultadoBusqueda", {homeBuscarResultado : homeBuscarResultado}) //
    }
};

module.exports = indexController;
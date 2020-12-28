let usersController = {

    login : function (req, res) {
        res.render("login")
    },

    register : function(req, res) {
        res.render("register")
        
    },
    crear : function(req, res) {

        let usuario = {
            nombre : req.body.nombre,
            usuario : req.body.nombreDeUsuario,
            email : req.body.email,
            fechaDeNacimiento : req.body.fechaDeNacimiento,
            Domicilio : req.body.domicilio
        }
        //guardar la info
        
        res.render("index")
    },

    editar : function(req, res){
        let idUser = req.params.idUser;

        let users = [
            {id: 1, name: "Agustin", usuario: "agus", email: "agus@getMaxListeners.com", fechaDeNacimiento: "16/08/1995", domicilio: "corrientes"},
            {id: 2, name: "Sofia",  usuario: "sofi", email: "sofia@getMaxListeners.com", fechaDeNacimiento: "24/10/1995", domicilio: "elflein"},
            {id: 3, name: "Guido,",  usuario: "gui", email: "guido@getMaxListeners.com", fechaDeNacimiento: "11/02/1996", domicilio: "monroe"},
            {id: 4, name: "David",  usuario: "dav", email: "david@getMaxListeners.com", fechaDeNacimiento: "13/04/1997", domicilio: "sucre"},
            {id: 5, name: "Alejandro",  usuario: "ale", email: "alejandro@getMaxListeners.com", fechaDeNacimiento: "16/08/1980", domicilio: "laPampa"},
            {id: 6, name: "Jorge",  usuario: "jor", email: "jorge@getMaxListeners.com", fechaDeNacimiento: "19/01/1989", domicilio: "misiones"}

        ];
        let userEditar = users[idUser]


        res.send("userEditar") //, { userEditar : userEditar}
    }
};

module.exports = usersController;

/*

    login : function(req, res) {

        Storage.open('users.json')

        let user = storage.findOnBy('email', req.body.email)

        if (user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                return res.send('bienvenido')

            }
        }
        res.redirect('/users/login')

    },
*/

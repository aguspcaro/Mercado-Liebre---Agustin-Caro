const db = require("../../database/models/index");

let usersController = {

    root: function(req, res) {

        res.render("users/perfil")
    },

    mostrarLogin : function (req, res) {

        res.render("users/login")
        
    },
    checkLogin : function(req, res) {
        db.User.findAll({})

        res.redirect("/users")
    },

    mostrarRegister : function(req, res) {
        res.render("users/register")
        
    },
    crearRegister : function(req, res) {

        db.User.create({
            email : req.body.email,
            password: req.body.password
        })
        
        res.redirect("/");
    },

    mostrarEditarUsuario : function(req, res) {

        
        res.render("editarUser")
    },

    editarUsuario : function(req, res){
        
        db.User.update({ 
            email: req.body.email,
            password: req.body.password
        }, {
            where : {
                id : req.params.id
            }
        })


        res.redirect("/users/perfil")
    },

    mostrarCrearPerfil: function(req, res) {

        res.render("users/crearPerfil")

    },
    
    createPerfil: function(req, res) {

        db.Profile.create({
            image : req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
            birthday: req.body.birthday

        })
        
        res.redirect("/users/perfil");

    },

    mostrarEditarPerfil: function(req, res) {

        res.render("users/editarPerfil")

    },

    editarPerfil: function(req, res) {

        db.Profile.update({
            image : req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
            birthday: req.body.birthday

        }, {
            where : {
                user_id: req.params.id
            }
        })

        res.redirect("/users/perfil")

    }
};

module.exports = usersController;

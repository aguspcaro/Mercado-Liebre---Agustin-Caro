let userController = {

    "login" : function (req, res) {
        res.render("login")
    },



    register: function(req, res) {

        let user = {
            email : req.body.email,
            password : bcrypt.hashSync(rec.body.password, 10)
        }
    }
};

module.exports = userController;

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

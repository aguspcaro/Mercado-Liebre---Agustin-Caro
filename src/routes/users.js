var express = require('express');
var router = express.Router();

let usersController = require ("../controllers/usersController.js")

/* GET users listing. */
router.get('/', usersController.login);

router.get("/register", usersController.register)
router.post("/register", usersController.crear)

router.get("/editar/:idUser", usersController.editar)
router.put("/editar", function(req, res) {
    res.send("salio el PUT")
})

module.exports = router;

var express = require('express');
var router = express.Router();
const multer = require('multer');

let usersController = require ("../controllers/usersController.js")

/* GET users listing. */
router.get('/', usersController.mostrarLogin);

router.post('/', usersController.checkLogin);

router.get("/register", usersController.mostrarRegister)
router.post("/register", usersController.crearRegister)

router.get("/editar/:idUser", usersController.editarUsuario)
router.put("/editar", usersController.mostrarEditarUsuario)


router.get("/editar/:idUser", usersController.mostrarPerfil)
router.post("/editar", usersController.createPerfil)


router.get("/editar/:idUser", usersController.mostrarEditarPerfil)
router.put("/editar", usersController.editarPerfil)


module.exports = router;

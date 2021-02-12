var express = require('express');
var router = express.Router();
const multer = require('multer');

let usersController = require ("../controllers/usersController.js")

/* GET users listing. */
router.get("/", usersController.root)

router.get('/login', usersController.mostrarLogin);
router.post('/login', usersController.checkLogin);

router.get("/register", usersController.mostrarRegister)
router.post("/register", usersController.crearRegister)

router.get("/editarUser/:id", usersController.editarUsuario)
router.put("/editarUser", usersController.mostrarEditarUsuario)


router.get("/crearPerfil/:id", usersController.mostrarCrearPerfil)
router.post("/crearPerfil", usersController.createPerfil)


router.get("/editarPerfil/:id", usersController.mostrarEditarPerfil)
router.put("/editarPerfil", usersController.editarPerfil)


module.exports = router;

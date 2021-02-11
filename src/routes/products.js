const express = require('express');
const router = express.Router();
const multer = require('multer');


// CONTROLADOR
const productsController = require('../controllers/productsControllers');


// VISTA DE LOS PRODUCTOS
router.get('/', productsController.root);



module.exports = router;
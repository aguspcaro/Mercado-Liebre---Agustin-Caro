const express = require('express');
const router = express.Router();
const multer = require('multer');

var indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.index);

router.get("/buscar", indexController.buscar)

module.exports = router;

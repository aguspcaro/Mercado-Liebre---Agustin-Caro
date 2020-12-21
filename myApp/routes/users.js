var express = require('express');
var router = express.Router();

let userController = require ("../controllers/userController.js")

/* GET users listing. */
router.get('/', userController.login);

module.exports = router;

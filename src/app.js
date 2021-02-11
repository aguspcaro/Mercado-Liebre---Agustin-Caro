const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require("method-override");
const session = require("express-session");


// Como acceder a cada ruta
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
//Estas dos lineas nos van a capturar la info que venga a traves de un FORM en forma de Objeto Literal y transformarlo en JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Esto sirve para hacer uso del req.session
app.use(session(
  {
    secret: "esto es un secreto!!",
    resave: false,
    saveUninitialized: true
}));

app.use(cookieParser());
// Esto nos va a servir para poder usar los metodos PUT y DELETE
app.use(methodOverride("_method"));

// Linea que nos va a ayudar a mostrar los archivos en la carpeta Public
app.use(express.static(path.join(__dirname, '../public')));


// Como acceder a cada Vista
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

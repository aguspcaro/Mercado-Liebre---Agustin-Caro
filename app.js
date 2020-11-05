const express = require("express");
const app = express();
app.listen(3010, () => console.log("Estamos en vivo"));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});
app.get("/Ofertas", function(req, res){
    res.send("Estas en Ofertas");
});
app.get("/TiendasOficiales", function(req, res){
    res.send("Estas en Tiendas Oficiales");
});
app.get("/Vender", function(req, res){
    res.send("¿Queres Vender?");
});
app.get("/Ayuda", function(req, res){
    res.send("¿Necesitas ayuda?");
});
app.get("/Creatucuenta", function(req, res){
    res.send("Excelente decisión");
});
app.get("/Ingresa", function(req, res){
    res.send("Es por aquí");
});
app.get("/Miscompras", function(req, res){
    res.send("Acá estan tus compras");
});
app.get("*", function(req, res){
    res.sendFile(__dirname + "/public/images" + req.url)
})

const orderCrtl = require('../controller/orderController')

var express = require('express');
var app = express();

app.get('/',orderCrtl.getOrder);
app.get('/idOrder=:idOrder',orderCrtl.getOrderByIdOrder);
app.get('/idUser=:idUser',orderCrtl.getOrderByIdUser);
app.post('/',orderCrtl.createOrder)
app.put('/:idOrder',orderCrtl.updateOrder);



module.exports = app;
const cartCtrl = require('../controller/cartController')

var express = require('express');
var app = express();

app.get('/',cartCtrl.getCart);
app.get('/idUser=:idUser',cartCtrl.getCartById);
app.post('/',cartCtrl.createCart)
app.put('/:id',cartCtrl.updateCart)



module.exports = app;
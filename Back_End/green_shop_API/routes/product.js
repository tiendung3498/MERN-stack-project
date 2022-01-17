const productCtrl = require('../controller/productController')

var express = require('express');
var app = express();

app.get('/',productCtrl.getProduct);
app.get('/:id',productCtrl.getProductById);
app.post('/',productCtrl.createProduct)
app.put('/:id',productCtrl.updateProduct)



module.exports = app;
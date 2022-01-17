const userCtrl = require('../controller/userController')

var express = require('express');
var app = express();

app.get('/', userCtrl.getUser)
app.get('/:id',userCtrl.getUserById);
app.post('/',userCtrl.createUser)
app.put('/:id',userCtrl.updateUser)



module.exports = app;

const viewedCrtl = require('../controller/viewedController')

var express = require('express');
var app = express();

app.get('/',viewedCrtl.getViewed);
app.get('/idUser=:idUser',viewedCrtl.getViewedByIdUser);
app.get('/:id',viewedCrtl.getViewedById);
app.put('/:id',viewedCrtl.updateViewed);



module.exports = app;
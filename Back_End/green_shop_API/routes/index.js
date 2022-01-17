var express = require('express');
const app = express()
const db = require('./db')

db.on('error', console.error.bind(console, 'MongoDB getDataion error:'))


app.get('/', (req, res) => {
  res.send('Hello NodeJs!')
})

module.exports = app;

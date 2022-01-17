
const mongoose = require('mongoose')

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/green_shop';
mongoose
    .connect(url, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
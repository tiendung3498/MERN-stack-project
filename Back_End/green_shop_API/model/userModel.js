
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        _id: { type:mongoose.Schema.Types.ObjectId, required: false },
        id: { type:Number, required: false },
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, required: false },
        status: { type: Boolean, required: false},
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)
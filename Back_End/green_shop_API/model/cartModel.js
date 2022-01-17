const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cart = new Schema(
    {
        _id: { type:mongoose.Schema.Types.ObjectId, required: false },
        id: { type:Number, required: false },
        itemselected: { type: Array, required: true },
        idUser : {type:Number,required:false}
    },
    { timestamps: true },
)

module.exports = mongoose.model('carts', Cart)
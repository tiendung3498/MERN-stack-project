
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
    {
        _id: { type:mongoose.Schema.Types.ObjectId, required: false },
        id: { type:Number, required: false },
        img: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        del: { type: String, required: false },
        status: { type: Boolean, required: false },
        category:{type:String,required:true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('product', Product)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
    {
        _id: { type:mongoose.Schema.Types.ObjectId, required: false },
        idUser : {type:Number,required:false},
        idOrder: {type:Number,required:false},
        status:{type:String,required:true},
        time:{type:String,required:true},
        item:{type:Array,required:true},
        id: { type:Number, required: false },

    },
    { timestamps: true },
)

module.exports = mongoose.model('orders', Order)
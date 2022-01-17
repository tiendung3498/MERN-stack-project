const Order = require('../model/orderModel')
const db = require('../routes/db')

createOrder = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const order = new Order(body)
    order.id = body.id
    if (!order) {
        return res.status(400).json({ success: false, error: err })
    }
     db.collection('orders').insertOne(order,(err,req)=>{
        if (err) throw err;
        console.log("1 document inserted");
    })

}
getOrderByIdOrder = async (req, res) => {
    await db.collection('orders').findOne({idOrder: Number(req.params.idOrder)}, (err,order) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!order) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json( order )
    })
}
getOrderByIdUser = async (req, res) => {
    await db.collection('orders').find({idUser: Number(req.params.idUser)}).toArray((err,order) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!order) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json( order )
    })
}
getOrder = async (req, res) => {
    await db.collection('orders').find({}).toArray((err, order) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!order.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json(order)
    })
}
updateOrder = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    db.collection('orders').findOne({ idOrder: Number(req.params.idOrder) }, (err, order) => {
        if (err) {
            console.log(err)
        }
        order.status = "đã xác nhận"
        db.collection('orders').updateOne({ id: Number(order.id) },{$set:order}, (err, order) => {
            if (err) {
                console.log(err)
            }
    
        })
    })

}
module.exports = {
    createOrder,
    getOrderByIdOrder,
    getOrder,
    getOrderByIdUser,
    updateOrder
}
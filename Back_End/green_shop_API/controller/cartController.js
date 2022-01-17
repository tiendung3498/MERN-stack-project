const Cart = require('../model/cartModel')
const db = require('../routes/db')

createCart = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const cart = new Cart(body)

    if (!cart) {
        return res.status(400).json({ success: false, error: err })
    }
     db.collection('carts').insertOne(cart,(err,req)=>{
        if (err) throw err;
        console.log("1 document inserted");
    })

}
getCartById = async (req, res) => {
    await db.collection('carts').findOne({idUser: Number(req.params.idUser)}, (err,cart) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!cart) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json( cart )
    })
}
getCart = async (req, res) => {
    await db.collection('carts').find({}).toArray((err, cart) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!cart.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json(cart)
    })
}
updateCart = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    db.collection('carts').findOne({ id: Number(req.params.id) }, (err, cart) => {
        if (err) {
            console.log(err)
        }
        db.collection('carts').updateOne({ id: Number(cart.id) },{$set:body}, (err, cart) => {
            if (err) {
                console.log(err)
            }
    
        })
    })

}
module.exports = {
    createCart,
    getCartById,
    getCart,
    updateCart
}
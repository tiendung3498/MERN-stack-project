const Product = require('../model/productModel')
const db = require('../routes/db')

createProduct = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a product',
        })
    }

    const product = new Product(body)

    if (!product) {
        return res.status(400).json({ success: false, error: err })
    }
     db.collection('product').insertOne(product,(err,req)=>{
        if (err) throw err;
        console.log("1 document inserted");
    })

}
getProductById = async (req, res) => {
    await db.collection('product').findOne({id: Number(req.params.id)}, (err, product) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!product) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json( product )
    }).catch(err => console.log(err))
}

getProduct = async (req, res) => {
    await db.collection('product').find({}).toArray((err, product) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!product.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json(product)
    })
}

updateProduct = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    db.collection('product').findOne({ id: Number(req.params.id) }, (err, res) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        const product = res
        product.img = body.img
        product.name = body.name
        product.price = body.price
        product.status = body.status
        
        db.collection('product').updateOne({ id: res.id },{$set:product} )
            
    })
}
module.exports = {
    createProduct,
    getProductById,
    getProduct,
    updateProduct,
}
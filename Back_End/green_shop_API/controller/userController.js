const User = require('../model/userModel')
const db = require('../routes/db')

createUser = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }
     db.collection('users').insertOne(user,(err,req)=>{
        if (err) throw err;
        console.log("1 document inserted");
    })

}
getUserById = async (req, res) => {
    await db.collection('users').findOne({id: Number(req.params.id)}, (err,user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json( user )
    }).catch(err => console.log(err))
}
getUser = async (req, res) => {
    await db.collection('users').find({}).toArray((err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json(user)
    })
}
updateUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    db.collection('users').findOne({ id: Number(req.params.id) }, (err, res) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        const user = res
        user.name = body.name
        user.phone = body.phone
        user.email = body.email
        user.password = body.password
        user.status = !res.status
        
        db.collection('users').updateOne({ id: res.id },{$set:user} )
            
    })
}
module.exports = {
    createUser,
    getUserById,
    getUser,
    updateUser
}
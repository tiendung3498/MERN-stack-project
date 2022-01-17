const db = require('../routes/db')

getViewed = async (req, res) => {
    await db.collection('recentlyViewed').find({}).toArray((err, viewed) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!viewed.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json(viewed)
    })
}
getViewedById = async (req, res) => {
    await db.collection('recentlyViewed').find({id: Number(req.params.id)}).toArray((err,viewed) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!viewed) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json( viewed )
    })
}
getViewedByIdUser = async (req, res) => {
    await db.collection('recentlyViewed').find({idUser: Number(req.params.idUser)}).toArray((err,viewed) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!viewed) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json( viewed )
    })
}
updateViewed = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    db.collection('recentlyViewed').findOne({ id: Number(req.params.id) }, (err, viewed) => {
        if (err) {
            console.log(err)
        }
        db.collection('recentlyViewed').updateOne({ id: Number(viewed.id) },{$set:body}, (err, order) => {
            if (err) {
                console.log(err)
            }
    
        })
    })

}
module.exports = {
    getViewed,
    getViewedById,
    getViewedByIdUser,
    updateViewed
}
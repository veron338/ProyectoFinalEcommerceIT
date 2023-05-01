import express from "express"
var router = express.Router()
const uploadFile = require('../middlewares/multer')

router.post('/uploadFile', uploadFile(), (req, res) => {
    console.log(req.file)
    res.send('ok')
})

module.exports = router
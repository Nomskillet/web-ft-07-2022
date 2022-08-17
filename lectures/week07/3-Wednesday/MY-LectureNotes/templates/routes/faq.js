
const express = require ('express')
const router = express.Router()


router.get('/faq', (req, res)=>{
    res.send('some faqs')
})


module.exports = router
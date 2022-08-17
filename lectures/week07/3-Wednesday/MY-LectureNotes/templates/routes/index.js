
const express = require ('express')
const router = express.Router()


router.get('/', (req, res)=>{

    // res.send('home page')

    res.render('index', {

        firstName : "Nomi",
        lastName : "Khan",
        year: 1999999999,
        nums: [1, 2, 3, 4, 5],
        contacts: {year:200000}
    })
    
    
    // rendering a view (template)
    // second argument of render is how we pass information to our template
    //strings, int, 
})


module.exports = router
const express = require('express');
const router = express.Router();
const db = require('../models/database')


router.use(express.urlencoded({extended: false})); 
router.use(express.json());


router.get('/newdish', async (req, res) =>{
    
    try{
        let records = await db.query('SELECT * FROM categories');
        
        res.render('newDish', {
            categories: records
        })
    }
    catch{
        res.render('newdish', {
            categories: []
        })
    }
 
})

router.post('/newdish', async (req, res) =>{

    try{
        let {name, category, description, price, course, imageURL} = req.body

        category = parseInt(category) // convert string to integer

        price = parseFloat(price);

        // store information in our database

        let result = await db.result(`INSERT INTO menuitem (name, category, fooddescription, price, course, imageurl) VALUES ($1, $2, $3, $4, $5, $6)`, [name, category, description, price, course, imageURL ])

        res.redirect('/')


    } 
    catch{
        
        // console.log(error);
    }

})

module.exports = router;

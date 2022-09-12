
const express = require('express');
const router = express.Router();
const auth = require('../auth');  //auth/index.js
const db = require('../models');

router.get('/lectures', auth, async (req,res) => {

    let sessionData = req.session.passport.user;

    if(!req.session.username){
        
        let username = await db.users.findAll({where: {id: sessionData}})
        
        req.session.username = username[0].username;
    }

    /**
     * Once a user is logged in, you can get their user id from passport like so:
        let sessionData = req.session.passport;  //{user:3}

        or
        let sessionData = req.session.passport.user; // 3
     */

    console.log(sessionData);
    console.log(`username ${req.session.username}`);
    res.render('lectures')
})


module.exports = router;

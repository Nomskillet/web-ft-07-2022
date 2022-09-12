const express = require('express');
const router = express.Router();

router.get('/roster', (req,res) => {

   let sessionData = req.isAuthenticated();

   console.log(sessionData);
    res.render('roster')
})



module.exports = router;
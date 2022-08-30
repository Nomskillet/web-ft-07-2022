const express = require('express');
const app = express();

const cookieSession = require('cookie-session');

let port = 3000;
//session and a cookiet

//install cookieSession

// client=> req => middle func(req, res, next) =>  res => client

app.use(cookieSession({
    name: 'session', 
    keys: ['alksdj;lsjdlsajlskldfjslk'],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))


//req.session

app.get('/', (req, res) => { 
    
    req.session.fName= "Christian" //place this on the cookied
    res.send('home page')
})


app.get('/protected', (req, res) => { 

    
    res.send(`protected ${req.session.fName}`)
})




app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})
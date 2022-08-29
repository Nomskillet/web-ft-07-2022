const express = require('express');

const app = express();

const cookieSession = require('cookie-session')

let port = 3000;
// session and a cookie

// install cookieSession



// client req => middle func (req, res, next) => res => client
app.use(cookieSession({
    name: 'session',
    keys: ['kajsgdkjashdjlksah'],
    maxAge: 14 * 24 * 60 * 1000

}))



app.get('/', (req, res) =>{

    req.session.fName = "Christian"
    res.send('home page')
})

app.get('/protected', (req, res)=>{
   
    res.send(`protected ${req.session.fName}`)
})





app.listen (port, ()=>{
    console.log(`listening on port ${port}`);
})
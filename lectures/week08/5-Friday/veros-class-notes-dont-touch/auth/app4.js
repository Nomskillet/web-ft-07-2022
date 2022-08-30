const express = require('express');
const app = express();

let count = 0;

app.use(countLog) //#1
//req=>[ countLog,   ['/', '/dashboard'], printCurrentLog ]
/**
 * 
 * print hello world
 * two routes : /, /dashboard
 * print goodbye
 * 
* DRY
 */

app.use(passport)// isAuthenticated is going to be on the request object


app.get('/', (req, res, next) => {  //#2

    res.send('home page')
    next()
})

/// we want to protect dashboard
app.get('/dashboard', auth,  (req, res, next) => { 
    
    res.send('dashboard')
    next()
})

app.get('/error', (req, res) => { 

    res.send('you are not authenticaed.  Please log in or register')
 })

app.use(printCurrentLog)  //#3



function auth(req, res, next){

    if(req.isAuthenticated){
        next()
    }

   res.redirect('/error')
}

function passport(req, res, next){

    req.isAuthenticated = false; 

    next();
}

function countLog(req, res, next){

    count++;
    next();
}

function printCurrentLog(req, res, next){
    console.log(count);
}




app.listen(3000, () => console.log('Server Started'))
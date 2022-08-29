const express = require('express');
const app = express();

// app.use(logger)
// app.use(admin)



// app.get ('/', (req, res, next)=>{
//     console.log('hello world');
//     res.send('home page')
// })

// app.get('/', (req, res, next)=>{

// })

// function logger(req, res, next){

//     console.log('Log');

//     next();
// }



// app.get('/', (req, res, next)=>{
//     console.log('inside of route');
//     res.send('home page')
// })

// app.get('/admin', (req, res)=>{
//     console.log('inside of route');
//     res.send('home page')
//     next()
// })


// // middle ware function
// function logger(req, res, next){

//     console.log('Log');

//     next();
// }

// function admin(req, res, next){
//     console.log('inside admin function');
//     next();
// }





/// new

let count = 0;
app.use(countLog)
app.use(passport) // isAuthenticated is going to be on the request object




app.get('/', (req, res, next)=>{


    res.send('home page')
    next()
})

app.get('/dashboard', auth,  (req, res, next)=>{
    console.log('dashboard');
    res.send('dashboard')
    next()
})

app.get('/error', (req, res) =>{
    res.send('you are not authenticated')
})

app.use(printCurrentLog)


function auth(req, res, next){

    if(req.isAuthenticated){
        
       return next()
    }

    res.redirect('/error')
    // console.log('user is valid');
    // next()
}

function passport(req, res, next){
    req.isAuthenticated = false;
    next()
}

function countLog(req, res, next){

    count++;
    next();
}

function printCurrentLog(req, res, next){
    console.log(count);
}

app.listen(3000, ()=>{
    console.log('listening to port 3000');
})
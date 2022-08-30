const express = require('express');
const app = express()

// req => [logger, [/, /admin] ,admin ] => res
app.use(logger)


app.get('/', (req, res, next) => { 

    console.log('inside of route');
    console.log(req.mySession);
    res.send('home page')
    next()
})


app.get('/admin', (req, res) => { 


    console.log('inside of route');
    res.send('home page')
})

app.use(admin)

//middleware function
function logger(req, res, next){

    req.mySession = "Veronica"
    console.log('Log');
    // console.log(req);

    next();
}

function admin(req, res, next){

    console.log('inside adming function');
    // console.log(req);
    next()
}


app.listen(3000, ()=>{
    console.log('listening on port 3000');
})


/**
 * 
 * print hello world
 * two routes : /page1, /page2
 * print goodbye
 * 
 * 
 * 
 */





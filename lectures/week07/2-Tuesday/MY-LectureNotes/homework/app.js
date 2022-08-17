

const express = require ('express');
const app = express();






// create and start a server

let port = 3000
app.listen(port, () => { 
    console.log(`listening on port: ${port}`)
})


//create a route handler 
// localhost:3000

app.get('/', (req, res) => { 
    res.send("Hello World")
})

// localhost:3000/cats
app.get('/cats', (req, res)=>{
    res.send('meow')
})


// localhost:3000/dogs
app.get('/dogs', (req, res)=>{
    res.send('woof')
})

// localhost:3000/cats_and_dogs
app.get('/cats_and_dogs', (req, res)=>{
    res.send('we live together')
})




app.get('/greet', (req, res) =>{

    let firstName = req.query.name
  
    
    res.send(`hello,${firstName}!`)

})




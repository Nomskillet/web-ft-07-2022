
const express = require ('express');
const app = express();



let port = 3000

/// setting up a folder that holds static resources

app.use(express.static('public')) //hold all of our static resources

// configuring ejs to work with application
app.set('view engine', 'ejs') // telling express what template engine your using

// app.set('views', 'myviews') // maps defualt view names to something else

app.use(require('./routes/index'))

app.use(require('./routes/aboutUs'))

app.use(require('./routes/faq'))

app.use(require('./routes/city'))

//n-tier
// view layer - business layer - data

// mvc 
// module - viewer - controller




// app.get('/', (req, res) => { 
//     res.send("Hello World")
// })



// app.get('/aboutus', (req, res) => { 
//     res.send("about us")
// })




// app.get('/faq', (req, res) => { 
//     res.send("faq")
// })






// server 
app.listen(port, () => { 
    console.log(`listening on port: ${port}`)
})

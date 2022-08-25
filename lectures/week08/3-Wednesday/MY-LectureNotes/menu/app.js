
const express = require('express');
const app = express();



const db = require('./models/database') //instance of our db connection
let port = 3000

//install ejs templates
app.set('view engine', 'ejs')


// // configure public folder
// app.use(express.static('public'))// static assests go


//routes
app.use(require('./routes/index'))
app.use(require('./routes/newDish'))



// db.query('SELECT * FROM categories')
// .then(results =>{
//     console.log(results);
// })



// const categories = async () => {
//     let results = await db.query ('SELECT * FROM categories')
   
//     results.forEach(category =>{
//         console.log(category.name);
//     })
// }
// categories()


const insertCategoryItem = async (categoryName) => {
    
    // let results = await db.result(`INSERT INTO categories VALUES (DEFAULT, '${categoryName}' )`)


    // sanitize our inserts

    let results = await db.result(`INSERT INTO categories VALUES (DEFAULT, $1)`, [categoryName])

    console.log(results);

}

// insertCategoryItem('Moroccan')

//server
app.listen(port, ()=>{
    console.log(`you are running on port: ${port}`);
})
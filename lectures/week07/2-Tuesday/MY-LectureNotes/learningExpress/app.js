

const express = require ('express');

const app = express()

app.listen(3000, () =>{
    console.log(`listening on port 3000`);
})

app.get('/', 
  (req, res) => {
    response.send('Hello Wold!');
  });

  app.get('/batwomen', 
  (request, response) => {
    response.send('bat people');
  });

  //localhost:3000/name?fname=Kipp&lname=smith&city=Atlanta

  app.get('/name', (req, res) =>{

    let firstName = req.query.name
    let lastName = req.query.lname
    let city = req.query.city
    
    res.send(`<hi>${firstName} and last name is ${lastName} i live in ${city}</h1>`)

  })


  app.get('/cats', (req, res) => {

    res.send('cats')

  })



  app.get('/contact/:fname/:lastName', (req, res) =>{

    let (fName, lastName) = req.params

    res.send(`<h1>${fname} ${lastName}</h1>`)

  })


  app.get('/calc/:multiply/:5/:4', (req, res) => {
    
    
    let (multiply, 5, 4) = req.params
   


    res.send(`${multiply}`)


  })



  let data = {data: [{
    id: 0,
    name: "Golden Retriever",
    
    img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
},
{
    id: 1,
    name: "Lab",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
},
{
    id: 2,
    name: "pug",
    img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
},
{
    id: 3,
    name: "poodle",
    img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
}
]}


// localhost:3000/dog

app.get('/dog', (req, res)=>{
    let htmlFragment = ""

    let dogsArr = data.data

    dogsArr.forEach((obj)=>{

        htmlFragment += `
        
        <a href ="/dogs/${obj.id}"><h1>${obj.name}</h1></a>

        <a href ="/dogs/${obj.id}"><img src="${obj.img}" width="400px"/></a>
        
        `
    })

    res.send(htmlFragment)
})




// localhost:3000/dogs/3
app.get('/dogs/:id', (req, res)=>{

    let id = req.params.id;

    let name = data.data[id].name
    let img = data.data[id].img

    res.send(`
    
    <h1>${name}</h1>

    <img src="${img}" width="400px">

    <ul>
        <li><a href="/dog"> Home</a></li>
        <li><a href="/dogs/0"> Golden Retriever</a></li>
        <li><a href="/dogs/1"> Lab</a></li>
        <li><a href="/dogs/2"> Pug</a></li>
        <li><a href="/dogs/3"> Poodle</a></li>
    </ul>


    `)

})



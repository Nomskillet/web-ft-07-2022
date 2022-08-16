
// build a server and turn it on
// importing core module from node js library

const http = require('http');
const cow = require('cowsay');
const superhero = require('superheroes')

console.log(superhero.random());



let students = [
    {
        fName: "Victoria",
        city: "Atlanta"
    },
    {
        fName: "Andrew",
        city: "Atlanta"
    },
    {
        fName: "Stephen",
        city: "Houston"
    },
    {
        fName: "James",
        city: "Austin"
    },
    {
        fName: "Matt",
        city: "Seattle"
    },

]


// set up server

const server = http.createServer((request, response) =>{

    // console.log(request.url);

    switch(request.url){

        case '/':  //home page localhost:3000

        response.setHeader('Content-Type', 'text/html') // letting the client know were sending html back
        response.end(`<h1>hello world</h1>`)
        break;

        case '/api': //localhost:300/api

        response.setHeader('Content-Type', 'application/json') // sending json data to client

        let studentsJSON = JSON.stringify(students)

        response.end(studentsJSON)
        break;

        default:
            break;

    }

})



// turn server on
// localhost:3000


// server.listen(3000, () =>{

//     console.log(`Server is running on port 3000`);
// })


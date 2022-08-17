
const fs = require('fs'); // core node module that allows us to read and write to file system


// let fileName = "sample.txt"
// fs.writeFile(fileName, "i love node", (error)=>{

//     if(error){
//         console.log(error.message);

// }

// console.log(`file saved at ${fileName}`);

// })






// fs.unlink(fileName, (error) => {
//     if (error) throw error;
//     console.log(`successfully deleted ${fileName}`);
//   });


fs.readFile('preamble.txt', (error, buffer) =>{
    if(error){
        console.log(error.message);
        return;
    }

    console.log(`file data: ${buffer.toString()}`);
})
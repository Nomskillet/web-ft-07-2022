

let log = {
    info: (info)=> {
        console.log(`info: ${info}`);
    } ,
    warning: (warning) => {
        console.log(`Warning: ${warning}`);
    },
    error:(error) => {
        console.log(`Error ${error}`);
    } 
}

module.exports = log;
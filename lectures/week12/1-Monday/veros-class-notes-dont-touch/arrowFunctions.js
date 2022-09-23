// //explicit
// const sum = (n1, n2) => {
    
//     console.log('hellow world');
//     return n1 + n2
// }

// //implicit

// const sumImplicit = (n1, n2) =>n1 + n2




// const sumWithBraces = (n1, n2) => {console.log('hello'); return n1 + n2}


// const sumSmoothies = () => (
//     45
// )

// console.log(sumSmoothies());


// const arrowFunctions = () => (
//     <div>
//         sldkf
//         lskdfjs'<datagrid></datagrid>
//     </div>
//   )


// console.log(arrowFunctions());


// const returnObj = () => ({num: 4})

// arr.map((el)=>{

// })



const outer = () => {
    
    return ()=>{
            console.log('inner function');
    }
}

let fun = outer()

// fun()
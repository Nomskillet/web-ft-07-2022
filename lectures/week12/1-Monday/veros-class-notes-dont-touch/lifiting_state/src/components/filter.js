
let arr = [1, 2, 3, 99, 4]

//                   |


let newArr = arr.filter(el =>{

    return el !== 99
})

console.log(newArr);
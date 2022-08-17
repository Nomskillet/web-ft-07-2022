
const sum = (arr) => {

    let sumArr = arr.reduce((prev, curr) => {
        return prev + curr
    }, 0)

    return sumArr
}

const multiply = (arr) =>{

    return arr.reduce((prev, curr)=>{
        return prev * curr
    })

}


module.exports = sum;
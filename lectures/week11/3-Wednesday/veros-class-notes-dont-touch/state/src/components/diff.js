
// let count = 0


// count = 4
// const counter = () => {
    
//    count = count + 1

//     return count
// }


// let result = counter() // 1
// result = counter()  // 1
// result = counter()  // 1
// result = counter()  // 1

// console.log(result);

class Count {
    constructor() {
        this.count = 0
    }

    increment(){
        this.count++

        return this.count
    }
}

let count = new Count()

let result = count.increment()
result = count.increment()
result = count.increment()
result = count.increment()

console.log(result);
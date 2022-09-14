
class Car {

//     // __init__ 
    constructor(name){
        //self.name 
        //this = self 
        this.name = name
    }


    printName = () =>{
        console.log(this.name);
    }

    // printName(){

    // }
}

class Hybrid extends Car {

    constructor(gasMilage, name){
        //super(name) //calling parent class construcotr and passing name value
        this.gasMilage = gasMilage
    }

    printCarDetails(){
        console.log(this.gasMilage);
    }
}

let toyota = new Car("toyota")
let honda = new Car('honda')

console.log(toyota);
console.log(honda);


// let toyota = {
//     name: "Toytoa",
//     printName: ()=> console.log(toyota.name)
// }

// let honda = {
//     name: "Honda",
//     printName: ()=> console.log(toyota.name)
// }

// console.log(toyota.name);
// toyota.printName();
// console.log(toyota);
// console.log(honda.name);
// honda.printName();
// console.log(honda);

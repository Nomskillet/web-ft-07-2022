

class Car{

    //__init__
    constructor(name){
        //self.name
        //this = self
        this.name = name
    }

    printName = ()=>{
        console.log(this.name);
        
    }
}


class Hybrid extends Car{
    
    constructor(gasMilage, name){
        super(name)//calling parent class constructor and pasing name value
        this.gasMilage = gasMilage
    }
    
    printcarDetails(){
        console.log(this.gasMilage);

    }
}


let toyota = new Car("toyota")
let honda = new Car ("honda")

console.log(toyota);
console.log(honda);

// let toyota = {
//     name: "Toyota",
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
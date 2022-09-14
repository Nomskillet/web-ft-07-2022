
// let age =18 

// if (age >= 21){
//     console.log('what beer would you like?');
// }
// else{
//     console.log('too young to drink');
// }


// let result = (age >= 21 )  ?  'what beer would you like?' :  'too young to drink'

// console.log(result);

// let arrA = [1, 2, 3, 4] 

// let arrB = [...arrA, 5, ...arrA, 5, 6, 7] 

// arrB.push(5)

// console.log(arrA);
// console.log(arrB);


const student = {
    ID: '21',
    name: 'Jhon',
    GPA: '3.0',
};

// let id = student.id ;
// let name = student.name ;
// let gpa = student.gpa;

// let {ID:id, name, GPA} = student;

// console.log(name);
// console.log(GPA);
// console.log(id);

// const foo = ['one', 'two', 'three'];

// const [red, yellow, green] = foo;
// let red = foo[0] 
// let yellow = foo[1]
// let green = foo[2]

// console.log(yellow);


let arr = [1, 2, 3, 4, 76, 56, 45, 12, 43]
//                  | 

//?explicit return
// let liTags = arr.map(el =>{


//     return `<li>${el}</li>`
// })

//?implicit return
let liTags = arr.map(el =>`<li>${el}</li>`)


console.log(liTags);
// let newArr = arr.map(val =>{

//     return val * 2
// })

// console.log(newArr);

// arr.forEach(val =>{

//     console.log(val);
// })

// let obj = {
//     fName: 'veroncia', 
//     lName: 'taucchi', 
//     city: 'naples'
// }

// for (key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }


// for (x of arr){

//     console.log(x);
// }

// for(let i = 0; i< arr.length; i++){

//     console.log(arr[i]);
// }
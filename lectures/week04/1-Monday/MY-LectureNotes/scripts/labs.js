


// let firstName = "Nauman"
// let lastName = "Khan"

// console.log(firstName + " " +lastName)

// console.log(firstName.length)
// console.log(lastName.length)
// console.log(firstName.length + lastName.length)

// let names = firstName + '' + lastName


// console.log(names.indexOf(lastName))




// let greeting = `My name is ${firstName} and my last name is ${lastName}`

// console.log(greeting)


// let a = 5
// let b = 5

// let sum = (a + b)



// console.log(`the sum of a + b = ${sum}`)


// let num1 = 5
// let num2 = 5

// if (num1 > num2){
//     console.log(`${num1} is greater than ${num2}`);
// }
// else if (num1 < num2){
//     console.log(`${num1} is less than ${num2}`)
// }
// else {
//     console.log(`${num1} is equal to ${num2}`)
// }




// let month = 9
// if (
//     month === 1 ||
//     month === 3 ||
//     month === 5 ||
//     month === 7 ||
//     month === 8 ||
//     month === 10 ||
//     month === 12
//   ) {
//     alert("This month has 31 days");
//   } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     alert("This month has 30 days");
//   } else if (month === 2) {
//     alert("This month has 28 days");
//   } else {
//     alert("Unknown month!");
//   }

// let month = 1

// switch(month){
//     case 1:
//     case 3:
//     case 5: 
//     case 7: 
//     case 8: 
//     case 10: 
//     case 12: 
//         console.log('This month has 31 days.')
//         break;
        
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log('this month has 30 days')
//         break;

//     case 2:
//         console.log('this month has 28 days')
//         break;

//     default:
//         console.log('unknown month')
// }



// let num = 2
// while ( num <= 20){
    
//     console.log(num)
//     num = num + 2
// }

// for(let nums = 2; nums <= 20; nums += 2){

//     console.log(nums)

// }




var str1 = "javascript".split("");


for (var i = 1; i < str1.length; i+=2) {
     str1[i] = "z";
}
console.log( str1.join("") );


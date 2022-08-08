


// let allChar = []
// let allHouse = []

// const gotMain = async() => {

// let htmlFragment = "";

// //   for loop for houses - fetching api data

//     for (let index = 1; index <= 9; index++){
//     let fetchHouse = await fetch(`https://www.anapioficeandfire.com/api/houses?page=${index}&pageSize=50`)
//     let housesList = await fetchHouse.json()
//     let objData = housesList
//     // console.log(objData);
//     objData.forEach(element =>{
//         allHouse.push(element)
       
//     });
//     }
//     // for loop for characters - fetching api data
//     for(let i = 1; i <= 43; i++){
//     let fetchChar = await fetch(`https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=50`)
//     let charList = await fetchChar.json()
//     let dataObj = charList
//     dataObj.forEach(e =>{
//         allChar.push(e)
//     });
     
     
     
   
//      let ul = document.querySelector(".listContainer")
     
    

    
//     // console.log(allHouse)
//     // console.log(allChar);
    

//     const createLi = (charName, nameOfHouse) => {
//         console.log(charName, nameOfHouse);
        
       
//             // console.log(element.name);
//             htmlFragment += `<li>${charName} of ${nameOfHouse}</li>`
            
//             ul.innerHTML = htmlFragment
         
//     }
    
   
   
  
 

//     // this for each loop is getting the name of each house and creating the createli function

//     allChar.forEach(object =>{
//         if(object.allegiances.length == 0){
//             // console.log(`${object.name} has no house affiliation`);
//         }
//         else if(object.allegiances.length != 0){
//             // console.log(`${object.name} has a house affiliation`);
//             let houseNumber = object.allegiances[0].slice(45)
//             // console.log(houseNumber);
//             let houseName = allHouse[houseNumber - 1].name
//             // console.log(houseName);
//             createLi(object.name, houseName)
//         } 
       
//     })
// } 
    
// }


// htmlFragment.addEventListener("click", e=>{
//     console.log(e.target);
// })


// gotMain()



let listGroupContainer = document.querySelector('.list-group');
let liTagsHTMLFragment = "";



const getChar = async() =>{

   let charArr = [];
   let pageIndex = 1;
   let resultsArr = []

   do{

    let chars = await fetch(`https://www.anapioficeandfire.com/api/characters?page=${pageIndex}&pageSize=50`)
    
    resultsArr = await chars.json();
    
    charArr = [...charArr, ...resultsArr]

    pageIndex++;


   }

   while(resultsArr.length > 0)

   console.log(charArr);

//    dom manipulation

   charArr.forEach(charObj =>{

    liTagsHTMLFragment += `<a href="${charObj.url}">${charObj.name} Houses: ${charObj.allegiances.length}</a>`


   })

   listGroupContainer.innerHTML = liTagsHTMLFragment;

   listGroupContainer.addEventListener('click', async e =>{
    
    e.preventDefault();    
    
    // console.log(e.target.href);

    let detailedAPIEndpoint = e.target.href;

    let apiCall = await fetch(detailedAPIEndpoint);

    let detailedInfo = await apiCall.json();

    // console.log(detailedInfo);

    if(detailedInfo.allegiances.length > 0){
        detailedInfo.allegiances.forEach(houseUrl =>{
            displayHouseInformtion(houseUrl)
        })

    }

   })


   const displayHouseInformtion = async houseUrl => {

    let houseAPICall = await fetch(houseUrl)
    let houseInfo = await houseAPICall.json()

    console.log(houseInfo.name);

   }


}

getChar()
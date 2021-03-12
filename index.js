


// const fetchRequest = async()=>{
//     let file='index.json'

//     const res = await fetch(file);
//     const data = await res.json();
//     console.log(data.entries);

    
// }

// fetchRequest()


///factoryFunction//

// const employees = (name,age,mail)=>{
//     return {
//         name,
//         age,
//         mail
//     }
// }

// const Aravind = employees('Aravind',24,'arvind@gmail.com');
// console.log(Aravind);

// const Hema = employees('Hema',20,'hema@gmail.com');
// console.log(Hema);


///Camel Notation : oneTwoThreeFour
/// Pascal Notation : OneTwoThreeFour

//Constructor Property  
////notes taken//

/// value vs ref types//

// let name ={ myName: 'aravind'}
// let name2 = name.myName;

// name.myName = 'ram';

// console.log(name2);


// /// Obj iterating methods //

// const employee = {
//     name: 'Aravind',
//     myfunc(){
//         console.log('Im a UI Developer @ Microsoft , i build amazing products');
//     },
//     mail:'aravind@gmail.com'
// }


// // const employee2 = {};

// // for (let key in employee){

// //     employee2[key] = employee[key]
// // }

// const employee2 = Object.assign({goal : 'Microsoft UI Developer'},employee)

// console.log(employee2);

///Obj Questions//

// const address = {
//     street:'No 50 Nehru Nagar',
//     city:'Puducherry',
//     zipcode:605011

// }


// const showAddress = (address)=>{

//     for(let key in address){
//         console.log(key,address[key]);
//     }
// }

// showAddress(address);


//Factory Function///

// const myAddress = (street,city,zipcode)=>{
//     street,
//     city,
//     zipcode
// }


// console.log(myAddress('No 50 Nehru Nagar','Puducherry',605011));

// //Constructor Function//

// function Myaddress (street,city,zipcode){

//     this.street=street,
//     this.city=city,
//     this.zipcode=zipcode

// }

// const address1 = new Myaddress('No 50 nehru nagar','Puducherry',605011);
// const address2 = new Myaddress('No 50 nehru nagar','Puducherry',605011);


// function areEqual(address1,address2){

//    for(let key in address1,address2){

//         if(address1[key]  === address2[key]){
//             return true
//         }else{
//             return false
//         }
//    }
// }

// const areequal = areEqual(address1,address2)
// console.log(areequal);


// const blogPost = {
//     title:'Master',
//     body:'Master is a vijay film',
//     author:'Lokesh Kanagaraj',
//     views:'500M',
//     comments:[{
//         author:'Lokesh',
//         body:'Master is a vijay film'
//     }],
//     isLive: true false

// }


// const inexpensive = {
//     pizza:5,
//     dosa:2
// ,}


///Arrays///

const numbers = [];

numbers.push(1,2,3,4,5);
console.log(numbers);
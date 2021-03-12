


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


// ///Arrays///

// const numbers = [];

// numbers.push(1,2,3,4,5);

// ///adding in begining///
// numbers.unshift(-2,-1,0);

// console.log(numbers);

// const num2 = [2,3,4,5,,0,4];


// console.log(num2.indexOf(2,2));
// console.log(num2.includes(2,2));
// console.log(num2.lastIndexOf(4,5));


// ///Finding Elements//

// const courses = [
//     {
//         id:1,
//         name:'JavaScript-Brad'
//     },
//     {
//         id:2,
//         name:'JS by steve griffith'
//     }
// ]


// // Practice with JSON//

// const renderData = async()=>{
//     const res = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
//     const data = await res.json();

//     const rawData = data.entries;
//     console.log(rawData);
//     console.log(rawData.find(raw=>{
//         return raw.title === 'Wolf Creek'
//     }));
    
//     rawData.map((raw)=>{
       
//     })
//      rawData.find((raw)=>{
//         return raw.title === 'Wolf Creek'
        
//     })
// }


// renderData()

// ///Removing elements from array//

// const numbers = [1,2,3,4,5,6,7,8,9,10];

//   console.log(numbers.pop());  

//   console.log(numbers.shift()); 
  
//   console.log(numbers.splice(1,2));  


// const renderData = async()=>{
//     const res = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
//     const data = await res.json();

//     console.log(data.entries);
//     console.log(data.entries.slice(0,21));
// }

// renderData();


// /// coombining and slicing//

// const num1 = [{id:12}];
// const num2 = num1;

//  const combined = (num1.concat(num2));
//  num1[0].id = 10;
 
//  console.log(combined);

//  console.log(combined.slice(2,));  

//  let no1 = {id:15};
//  let no2 = no1;

//  no1 = {id:10};

//  console.log(no2);

//  ///Spread super important/./

// let a = [12,5,6,9,8,9,6];

// const sprd = ...a
// console.log(sprd);

//iterating an array//

// const renderData = async()=>{
//     const res = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
//     const data = await res.json();

//    data.entries.forEach((mydata)=>{
//         console.log(mydata);
//     })
//     data.entries.slice(0,21)
// }

// renderData();


//joining an array//

// const num =[5,5,8,9,84,44]

// console.log(num.join());

// const sentence = 'Aravind UI Developer @Microsoft';
// console.log(sentence.split('')[3].toUpperCase);

///sorting////

// const renData = async()=>{
//     const res = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
//     const data1 = await res.json();

//     data1.entries.sort((a,b) => {

//         const nameA = a.title.toLowerCase();
//         const nameB = b.title.toLowerCase();

//         if(nameA < nameB) return -1;
//         if(nameA > nameB) return 1;

//     })


// }

//  console.log(renData()); 


// ///Every and some methods///

// const nums = [1,2,3,4,5,6];

// const allPositives = nums.every((num)=>{
//     return num >=0
// })

// console.log(allPositives);


///Filtering very crucial method///


const renderData = async()=>{
    const res = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
    const data = await res.json();

   data.entries.filter((filterReleaseYear)=>{
       return filterReleaseYear.releaseYear === 2020
   })
   console.log( data.entries.filter((filterReleaseYear)=>{
    return filterReleaseYear.releaseYear === 2010
}));
}

renderData();




// const fetchRequest = async()=>{
//     let file='index.json'

//     const res = await fetch(file);
//     const data = await res.json();
//     console.log(data.entries);

    
// }

// fetchRequest()


///factoryFunction//

const employees = (name,age,mail)=>{
    return {
        name,
        age,
        mail
    }
}

const Aravind = employees('Aravind',24,'arvind@gmail.com');
console.log(Aravind);

const Hema = employees('Hema',20,'hema@gmail.com');
console.log(Hema);
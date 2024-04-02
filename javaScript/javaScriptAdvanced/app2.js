//  async function greet(){

//    // throw "Some random error";
//     return "Hello"

// }

// greet().then((result)=> {
//     console.log("Promise was fullfilled");
//     console.log(result);
// }).catch((err)=> {
//     console.log("promise was rejected");
// })



// let demo = async()=> {
//    return 5;

// }


// function getNum(){
//     return new  Promise((res, rej)=> {
//         setTimeout(()=> {
//             let num = Math.floor(Math.random()* 10) +1;
//      console.log(num);
//        res();

//         }, 1000)
//     })
// }

// async function demo(){
//    await getNum();
//    await getNum();
//    await getNum();
// }

// demo();


// const h1 = document.querySelector('h1')

//  function colorChange(color, delay){
//   return new Promise((res, rej)=> {
//     setTimeout(()=> {
//      let num  = Math.floor(Math.random() *10);
//      if(num > 3){
//         rej("Promise reject");
//      }

//         h1.style.backgroundColor = color;
//        res();
//     }, delay)
   
// })
 
// }

// async function excuts(){

//     try{
//         await colorChange("red", 1000);
//         await colorChange("green", 1000);
//         await colorChange("blue", 1000);
//         await colorChange("yellow", 1000);
//     }catch(err){
//         console.log(err);
//         console.log("error caught");
//     }


    

//     let num = 3;
//     console.log(num);
//     console.log(num +3);
// }

// excuts();


// let jesonRes = `{
//     "fact": "The average cat food meal is the equivalent to about five mice.",
//     "length": 63
//   }`


//   let data = JSON.parse(jesonRes);

//   console.log(data.length);
//   console.log(JSON.stringify(data));


// let student = {
//     name: "Himanshu",
//     marks: 12
// }

// console.log(JSON.stringify(student));


let url = `https://catfact.ninja/fact`;

// fetch(url).then((res)=> {
//    console.log(res);
//  return res.json();
// }).then((data)=> {
//     console.log(data);
//     return fetch(url);
// }).then((res)=> {
//     return res.json();
// }).then((data)=> {
//     console.log(data);
// })
// .catch((err)=> {
//     console.log(err);
// }) 

// console.log("I am Happy");


const getFact = async ()=> {
    try{
        let res = await fetch(url);
        let data = await res.json();
         console.log(data.fact);
         let res2 = await fetch(url);
         let data2  = await res2.json();
         console.log(data2.fact);
    }

    catch(err){
        console.log('SOMTHEING WRONG');
    }

    console.log("by");
    
}

getFact();





















// const handleApi = async()=> {
//     let res = await fetch(`https://catfact.ninja/fact`);

// let data = await  

// }








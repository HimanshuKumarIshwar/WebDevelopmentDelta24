// function hello(){
//     console.log("Hello");
// }

// function demo(){
//     hello();
// }
// console.log("Calling demo fnx");
// demo();

// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// setTimeout(()=> {
// console.log("Hello ");
// },2000)
// console.log("by");

// const h1 = document.querySelector("h1");

// setTimeout(()=> {
//    h1.style.color = "red"
// }, 1000);

// setTimeout(()=> {
//     h1.style.color = "yellow"
//  }, 2000);

//  setTimeout(()=> {
//     h1.style.color = 'green'
//  }, 3000)

// function changeColor(color, delay){
//     setTimeout(()=> {
//         h1.style.color = color
//     }, delay)
// }

// changeColor('red', 1000);
// changeColor('yellow',2000);
// changeColor('green', 3000);

// function changeColor(color, delay, nextColorChange){
//    setTimeout(()=> {
//     h1.style.color = color;
//     if(nextColorChange) nextColorChange();
//    }, delay)
// }

// changeColor('red', 1000, ()=> {
//     changeColor('green', 1000, ()=> {
//         changeColor('blue', 1000, ()=> {
//             changeColor('orange', 1000)
//         });
//     });
// });

//callbacks nesting -> callback hell

// function saveToDB(data){

// let internetSpeed = Math.floor(Math.random()* 10)+1;
// if(internetSpeed > 4){
//     console.log("Data is saved ");
// }else {
//     console.log("weak internet connection");
// }

// }

// function saveToDB(data, sucess, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     sucess();
//   } else {
//     failure();
//   }
// }

// saveToDB(
//   "Himanshu",
//   () => {
//     console.log("success: Data is saved ");
//     saveToDB(
//       "Hello world",
//       () => {
//         console.log("success2: Data is saved");
//         saveToDB(
//           "Himanshu",
//           () => {
//             console.log("success3 data is saved");
//           },
//           () => {
//             console.log("failuer3: weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure: weak internet connection");
//   }
// );

// using promises

// function saveToDb(data) {
//   return new Promise((res, rej) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       res("Success: data is saved");
//     } else {
//       rej("Failure: weak connection");
//     }
//   });
// }

// let request = saveToDb("apna college");

// request.then(()=> {
//     console.log("Promises was resolve");
//     console.log(request);
// })
// .catch(()=> {
//     console.log("proises was  reject");
//     console.log(request);
// })

// saveToDb("apna college")
//   .then((res) => {
//     console.log("data1 is resolve");
//     console.log(res);
//     return saveToDb("helloworld");
//   })
//   .then((res) => {
//     console.log("Data2 saved");
//     console.log(res);
//     return saveToDb("Himansnhu");
//   })
//   .then(() => {
//     console.log("Data3 saved");
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log("proises was  reject");
//     console.log(error);
//   });

//applying promisese on colorProperty

const h1 = document.querySelector("h1");

function changeColor(color, delay) {
return  new Promise((res, rej) => {
    setTimeout(() => {
      h1.style.backgroundColor = color;
      res("color changed");
    }, delay);
  })
}

changeColor("red", 1000)
  .then(() => {
    return changeColor("green", 1000);
  })
  .then(() => {
    return changeColor("yellow", 1000);
  })
  .then(() => {
    return changeColor("blue", 1000);
  })
  .catch(() => {
    console.log("Some problem");
  });




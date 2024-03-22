// const student = {
//     name: "Himanshu Kumar",
//     age: 22,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// student.getAvg();



  // try{
  //   console.log(a);
  // } catch{
  //   console.log("Variabl is not dfined");
  // }



// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// try{
//   console.log(a);
// } catch(err){
//   console.log("Caught an error.... a is not defined");
//   console.log(err);
// }

// console.log("Byy");
// console.log("Byy");
// console.log("Byy");
// console.log("Byy");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Arrow function
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const sum = (a, b) => {
//   console.log(a+b);
// }

// sum(9,9)


// const cube = (n) => {
//   return n**3
// }

// console.log(cube(2));



// const pow = (a, b)=> {
//   return a**b;
// }

// console.log(pow(2, 4));

// const hello = ()=> {
//   console.log("Hello world");
// }


// hello();


// const mul  = (a, b) => ( a * b);
// console.log(mul(2, 3));


// const sum = (a,  b) => a+b;

// console.log(sum(2,3));

// console.log("hi there!");

// setTimeout(()=> {
//   console.log("Apna College");
// }, 4000);

// console.log("welcome to");


// console.log("HI there!");
// const id = setInterval(()=> {
//   console.log("Apna College");
// }, 2000)

//clearInterval(id);

// const student = {
//   name: "Himanshu",
//   marks: 99,
//   prop: this ,// global scope
//   getName(){
// console.log(` student ${this.name}`);
//   } ,
//   getMarks: ()=> {
//     console.log(this); // parent's Scope -> window
//   },
//   getInfo1: function(){
//      setTimeout(()=> {
//       console.log(this); //student 
//      }, 2000)
//   },
//   getInfo2: function(){
//     setTimeout(function() {
//       console.log(this);  // windows
//     }, 2000)
//   }
// };

// // const a = 5; // global scope
// student.getInfo1();
// student.getInfo2();



// const sq = n => n*n;
// console.log(sq(12));



// const id = setInterval(()=> {
//    console.log("Hello world");
// }, 2000)



// setTimeout(()=> {
//  clearInterval(id);
//console.log("clear interval run");
// }, 10000)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// Assigment
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const ArrayAverage = (arr)=> {
//    let sum = 0;
//    for(num of arr){
//     sum+= num;
//    }

//    return (sum / arr.length);
// }

// let arr = [1,2, 3, 4, 5,6,7];
// console.log(ArrayAverage(arr));

// console.log(ArrayAverage([2,2,2,2,2]));



//  const isEven = (n) => (n%2 ==0);
//  console.log(isEven(6));
//  console.log(isEven(5));



// const object = {
//   message: "Hello world",
//   logMessage(){
//     console.log(this.message);
//   }
// };
// setTimeout(object.logMessage, 1000); //undefined

let length = 4;

function callback(){
  console.log(this.length);
}

const object = {
  length: 5,
  method(callback){
    callback();
  },
};

object.method(callback, 1, 2)





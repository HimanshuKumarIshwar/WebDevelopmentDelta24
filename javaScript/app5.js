// function hello(){
//     console.log("hello world");
// }
// hello();
// hello();
// hello();

// function printName(){
//     console.log("Himanshu Kumar");
// }
// printName();

// function print1to5(){
//     for(let i =0; i<=5; i++){
//         console.log(i);
//     }
// }
// print1to5();

// function isAdult(age){
//    if(age > 18){
//     console.log("Adult");
//    }else {
//     console.log("Not Adult");
//    }
// }

// isAdult(12);
// isAdult(19);
// isAdult(990);


// function printPoem(){
//     console.log("Twinkle Twinkle, little star");
//     console.log("how I wonder what you are");
// }

// printPoem();

//  function rollADisc(){
//     let roll = Math.floor(Math.random()*6) + 1;
//      console.log(roll);
//  }

//  rollADisc();
//  rollADisc();
//  rollADisc();
//  rollADisc();

// function with arguments

// function printname(name = "user",){
//     console.log(name);
// }

// printname("himanshu");
// printname('Ajeet');
// printname("Ameet");

// printname();

// function printInfo(name, age){
//     console.log(`name: ${name} and age is :${age} `);
// }
// printInfo("Himanshu", 21);

//  function sum(num1, num2){
//     console.log(num1 + num2);
//  }

//  sum(2, 3);
//  sum(9,10);
//  sum(78923, 366778);


// function calcAvg(num1, num2, num3){
//      let avg =  (num1 + num2 + num3) /3;
//      console.log(avg);
//      return avg;

// }

// calcAvg(3, 3, 3);
// calcAvg(100, 99, 95);


//  function printTable(num){
//     for(let i = 1; i<=10; i++){
//         console.log(num * i);
//     }
//  }

//  printTable(19);
//  printTable(16);
//  printTable(17);


//  let arr = [1, 2, 3,4];
// console.log(arr);
// console.log(arr.slice(2,3));
  
// function sum(num1, num2){
//     return num1 + num2;
// }


// let s = sum(9,2);
// console.log(s);

// function isAdult(age){
//     if(age > 18){
//         return "Adult"
//     }
//     return "Not Adult"
// }

// console.log(isAdult(12));
// console.log(isAdult(19));



// function sumOfN(num){
//     let sum = 0;
//     for(let i=1; i <= num; i++){
//         sum+= i;
//     }
//     return sum;
// }

// console.log(sumOfN(3));


//  function concatinationOfAllString(arr){
//     let concat = "";
//     for(str of arr){
//         concat += str+" "
//     }
//     return concat;
//  }


//  const arr = ["Himasnhu", "Ajeet", "Ameet", 'Amod'];
//  let res =  concatinationOfAllString(arr);
//  console.log(res);


//++++++++++++++++++++++++++++++++++++++++++++
// Scope
// +++++++++++++++++++++++++++++++++++++++++++
//  let sum = 55;  //Global Sccope
// function calSum(a, b){
//   let sum = a + b; //function Scope
//   console.log(sum);
// }
// calSum(1,2);


// {
//    // var a = 23; not a good way
//    let a = 23;

// }
//console.log(a);




// for(let i = 0; i <= 5; i++){
//     console.log(i); // block scope
// }

//console.log(i);

 
// lexicalScope
// function outerFaction(){
//     let x = 5;
//     let y = 6;
//     function innerfunc(){
//      console.log(x);
//     }
    
//     innerfunc();
// }

// outerFaction();

// function outerFaction(){
  
//     function innerfunc(){
//      console.log(x);
//      let a = 10;
//     }
//     //console.log(a);
//     let x = 5;
//     let y = 6;
//     //hosting
//     innerfunc();
// }

// outerFaction();




// let greet = "hello"; //Global Scope

// function changeGreet(){
//     let greet = "Namaste"; // functional Scope
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet); // lexicalScope
//     }
// }
// console.log(greet);

// changeGreet();


// Function Exprssion

// const variable = function(arg1, arg2){
//        return arg1+ arg2;

// }
// console.log(variable(12, 12));



// let hello = function(){
//     console.log("Hello");
// }

// hello();



//  function multipleGreet(func, n){
//         for(let i = 0; i < n; i++){
//             func();
//         }
//  }

//  function func(){
//     console.log("Hello");
//  }
//multipleGreet(func, 10);

// let greet = function(){
//     console.log("hello");
// }

// multipleGreet(greet, 2)

// function oddEvenTest(request){
//   if(request == "odd"){
//     return function(n){
//        console.log(!(n % 2 == 0));
   
//     }
//   } else if(request == "even"){
//     return function(n){
//         console.log((n%2 == 0));
//     }
//   }else {
//     console.log("wrong Number");
//   }
// }


// let test = oddEvenTest("even");
// test(2);


// const calculator = {
//     add: function(a, b){
//         return a + b;
//     },
//     sub: function(a, b){
//         return a- b;

//     },
//     multiplication: function(a, b){
//         return a * b;
//     }




// const calculator = {
//     add(a, b){
//         return a + b;
//     },
//     sub(a, b){
//         return a- b;

//     },
//     multiplication(a, b){
//         return a * b;
//     }
// }
//   const sum = calculator.add(12,3)
//   console.log(sum);

//   const sub = calculator.sub(12, 3);
//   console.log(sub);

//   const mult = calculator.multiplication(12, 3);
//   console.log(mult);







//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Assigment
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++


//   function maxNumInArr(arr, num){
//     let max  = [];
//     for(n of arr){
//         if(n > num){
//             max.push(n);
//         }
//     }
//     return max;
//   }


//   let arr  = [1,2, 3, 4,6,88,9, 15, 65, 34];
//   console.log(maxNumInArr(arr, 12));
  

// let str = "abcdabcdefgggh";


// let ans = "";
// for(char of str){
//     if(!(ans.includes(char))){
//         ans+=char;
//     }
// }

// console.log(ans);


//  function longestCountryName(countrys){
//     let ans = "";
//     for( let country of countrys){
//         if(country.length > ans.length){
//             ans = country;
//         }
//     }
//     return ans;
//  }

//  countrys = ["Astralia", "Germany", "United States Of America"];

//  console.log(longestCountryName(countrys));



// function countVowels(str){
//     let vowels = "aeiou";
//     let count = 0;
//     for(char of str){
//         if(vowels.includes(char.toLowerCase())){
//          count++;
//         }
//     }
//     return count;
// }

// let str = "RadhaMohan";;

// console.log(countVowels(str));


//  function generateNumber(min, max){
//     let random = Math.floor(Math.random() *(max- min +1)) + min;
//     return random;
//  }

//  console.log(generateNumber(12, 14));

// console.log(generateNumber(1, 100));

























































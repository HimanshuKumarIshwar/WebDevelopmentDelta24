// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// for(let i = 1; i<=10; i++){
//     console.log(console.log(i));
// }

//   for(let i = 1; i <= 15; i+=2){
//     console.log(i);
//   }

// for(let i = 15; i >=1; i-=2){
//     console.log(i);
//   }

// for(let i = 2; i<=10; i+=2){
//     console.log(i);
// }

//  let num1 = 5;
//  for(let i =1; i<=10; i++){
//     console.log(num1*i);
//  }

// for(let i = 1; i <=3; i++){
//     for(let j = 1; j<= 3; j++){
//         console.log(j);
//     }
// }

//   let i =1;
//   while(i <= 5){
//     console.log(i);
//     i++;
//   }

//  let i = 0;
//  while( i<=20){
//     console.log(i);
//     i++;
//  }

// let favMovie = "Avatar";
// let guess = " ";

// while(guess !== favMovie){
//      guess = prompt("Enter my favorate Number")
//     if(guess === favMovie){
//         console.log("you win the game");
//         break;
//     }
//    let quit =  prompt("want to quit the game")
//     if(quit === "yes"){
//         console.log("you click quit this game");
//         break;
//     }

// }

// let favMovie = "Avatar";
// let guess = prompt("Guess my favorite movies");
// while (guess !== favMovie && guess !== "quit") {
//     console.log("wrong! try again");
//   guess = prompt("Enter my favorite movie");
// }
// if(guess == favMovie){
//     console.log("congrate");
// }
// console.log("game is over");

//    let i = 1;
//    while(i<=5){
//     if(i == 3){
//         break;

//     }
//     console.log(i);
//     i++;

//    }

//
//let fruits = ["mango", "apple", "banana", "litchi", "orange"];

//fruits.push("pineapple");
// for(let i = 0; i< fruits.length; i++){
//     console.log(fruits[i], i);
// }
//    for(let i = fruits.length-1; i>=0; i--){
//     console.log(fruits[i]);
//    }

// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

// for(let i = 0; i< heroes.length; i++){
//     for(let j = 0; j < heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

// for(let char of "apnacollege"){
//     console.log(char);
// }

// let fruits = ["mango", "banana", "orange", "Litchi"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

//    for(let list of heroes){
//     for(let hero of list){
//         console.log(hero);
//     }
//    }

// +++++++++++++++++++++++++++++++++++++++++++
// Tod App
//  +++++++++++++++++++++++++++++++++++++++++++

// let todo = [];

// let req = prompt("Enter you request");
// console.log(req);
// while (true) {
//   if (req === "quit") {
//     console.log("quitting app");
//     break;
//   } else if (req === "list") {
//     console.log("------------------");
//     for(let i = 0; i<todo.length-1; i++){
//      console.log(i, todo[i]);
//     }
//     console.log("------------------");
//   } else if (req === "add") {
//     let task = prompt("plese enter you want add To task");
//     todo.push(task);
//     console.log("task is added");
//   }else if(req === "delete") {
//       let idx = prompt("Enter index Number")
//       todo.splice(idx, 1);
//       console.log("Task deleted");
//   }else {
//     console.log("wrong request");
//   }

//   req = prompt("Enter you request");
  
// }



// ++++++++++++++++++++++++++++++++++++++++++++
// #Assigment
// +++++++++++++++++++++++++++++++++++++++++++


// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// console.log(arr);
// let num = 2;

// for(let i = 0; i< arr.length; i++){
//      if(arr[i] === num){
//       arr.splice(i, 1);
//      }
// }
// console.log(arr);

// let number = 287152;

// let strNumber = String(number);
// console.log(`count = ${strNumber.length}`);


//  let num = 287152;
//  let sumOfDigit = 0;
//  while(num  >  0){

//    let lastDigit = num % 10;
//   // console.log(lastDigit);
//      sumOfDigit += lastDigit;
//      num = Math.floor(num /10);
//  }
//  console.log(sumOfDigit);


// let num = 0;
// let fact = 1;
// if(num != 0){
//   while(num > 0){
//     fact *= num;
//     num -=1;
//  }
// }
// console.log(fact);
 

// let large = -1;
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// for(num of arr){
//   if(num > large){
//     large = num;
//   }
// }
// console.log(large);


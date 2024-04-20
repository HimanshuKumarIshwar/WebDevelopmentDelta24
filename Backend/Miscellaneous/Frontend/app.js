// const stu1 = {
//     name: "Himanshu",
//     age: 23,
//     marks: 95

// const { log } = require("console");

// }

// const stu2 = {
//     name: "Himanshu",
//     age: 23,
//     marks: 95
// }

// const stu3 = {
//     name: "Himanshu",
//     age: 23,
//     marks: 95
// }

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [1, 3 , 4 , 3, 2]
// arr.sayHello = () => {
//     console.log("I am from arr");
// }




// function personMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//            console.log(`Hi my name is ${this.name}`); 
//         }
//     }
//     return person

// }

// let p1 = personMaker("Himanshu", 23)

// p1.talk();





//constructor
// function Person(name, age){
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }

// Person.prototype.talk = function(){
//     console.log(`Hi! My name is ${this.name}`);
// }


// let p1 = new Person("Himanshu", 12);
// let p2 = new Person("Eve", 23);

// p1.talk();
// p2.talk();



class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

 
}


// let p1 = new Person("Himanshu", 12);
// let p2 = new Person("Him", 23);

// console.log(p1.name);



class Student extends Person{
  constructor(name, age, marks){
    super(name, age);
    this.marks = marks
  }

  
}

let s1 = new  Student("him", 12, 23);

let s2 = new Student("Ran", 123, 22232);
console.log(s1.name);

class Teacher extends Person{
  constructor(name, age, subject){
   super(name, age)
    this.subject = subject
  }
  
}



class Mammal {
  constructor(name){
    this.name = name;
    this.type = "warm-blooded"
  }

eat(){
  console.log("I am Eating");
}
}

class Dog extends Mammal{
  constructor(name){
    super(name);
  }
  barks(){
    console.log("woff....");
  }
}

class Cat extends Mammal{
  constructor(name){
    super(name)

  }

  meow(){
    console.log("Mewo...");
  }
}

let dog1 = new Dog("Moti");

console.log(dog1);
//let arr = [1, 2, 3, 4, 5, 6];

// function print(e){
//     console.log(e);
// }

// arr.forEach(print);

// arr.forEach((e)=> {
//     console.log(e*2);
// })


// let arrObj = [{
//     name: "Himanshu Kumar",
//     age: 22
// },
// {
//     name: "Ajeet",
//     age: 27
// },
// {
//     name: "Amod",
//     age: 23
// }]

// arrObj.forEach((e)=> {
//     console.log(`${e.name} is ${e.age} year old`);
// })


// let num = [1, 2, 3, 4,5];

//  let double = num.map((e)=> {
//     return e*2;
// })

// console.log(double);

// let student =[
//     {
//         name: "Himanshu",
//         marks: 95
//     },
//     {
//         name: "Ajeet",
//         marks: 99

//     },
//     {
//         name: "Ameet",
//         marks: 93
//     }
// ]


// let gpa = student.map((e)=> {
//     return (e.marks/10);
// })

// console.log(gpa);



// let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
// let even = nums.filter((e)=> {
//     return (e%2 == 0);
// })

// console.log(even);

// const isEven = [2,2,6,4].every((e)=> (e%2==0))

// console.log(isEven);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = arr.reduce((accum, elem)=> {
//     return accum+elem;
// },0);

// console.log(sum);


//  let arr = [1, 4, 2, 5, 6, 7, 3, 8, 12, 3];

//  let max =  -1;

// for(let num of arr){
//     if(num > max){
//         max = num;
//     }
// }

// console.log(max);

// 

    // let ans = arr.reduce((max, ele)=> {
    //     if(ele > max){
    //         return ele;
    //     }else {
    //         return max;
    //     }
    // })


//console.log(ans);
//console.log((max));

// let arr = [10, 40,20, 50, 60, 300];

// let isMulOfTen =  arr.every((e)=> {
//     return (e % 10 == 0);
// })

// console.log(isMulOfTen);


// let min  = arr.reduce((min, ele)=> {
   
//     if(ele < min){
//         return ele;
//     }else {
//         return min;
//     }
// })

// console.log(min);

// default parameters
// function sum(a, b = 2){
//     return a + b;
// }

// console.log(sum(2));


// spread

// let arr = [1, 2, 3, 4, 5 ,6];

// console.log(Math.min(...arr));
// console.log(...arr);

// let arr = [1, 2, 3, 4, 5];

// let newArr = [...arr];
// newArr.push(6);
// newArr.push(90);
// console.log(newArr);

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8];

// let nums = [...odd, ...even];

// console.log(nums);



// let data = {
//     email: "ironman@gmail.com",
//     password: "abcd"
// }

// let copyData = {
//     ...data,
//     id: 2
// }

// console.log(copyData);


// let obj2 = {..."hello"};
// console.log(obj2);


// function sum(...args){
//     return args.reduce((sum, elem) => (sum + elem))
// }

// console.log(sum(1, 2, 3, 4, 5));

// function min(a, b, c, d){
//     console.log(arguments);
// }

// min(12, 1, 2, 3 )


// Destructuring

// let names = ["tony", "bruce", "steve", "peter"]
// let [winner, runner, ...others] = names;

// console.log(winner, runner);
// console.log(others);

// const student = {
//     name: "Karan",
//     class: 9,
//     age: 14,
//     subjects: ["hindi", "english", "math", "science", "social studies"],
//     password: "ka123",
//     username: "Karan@123",
//     city: "patna"
// };

// const {username: user, password: pass, name, age, city:loctaion} = student;
// console.log(user, pass, name, age);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Assigment
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //let arr = [6, 6, 6, 6, 6, 6];

// let res = arr.map((e)=> (e*e)).reduce((cum, elem)=> cum+elem)/arr.length;
// console.log(res);

// let res =  arr.map((e)=> (e+5));
// console.log(res);

// let userName = ["himanshu", "Ajeet", "Ameet"];
// let ans = userName.map((e)=> (e.toUpperCase()));
// console.log(ans);



// function doubleAndReturnArgs(arr, ...args){

//     let doubleArgs = args.map((e)=> (2*e));

// let ans = [...arr, ...doubleArgs];
// return ans;

// }


// let arr= [1, 2, 3, 4, 5, 6];

// console.log(doubleAndReturnArgs(arr, 12, 12, 2, 4));


function mergerObject(obj1, obj2){
    let ans = {...obj1, ...obj2}
    return ans;
}


const student = {
    name: "Himanshu",
    age: 22
}

const locations = {
    from: "Patna",
     village: "Bharaul"
}

console.log(mergerObject(student, locations));

 







 









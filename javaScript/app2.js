// ++++++++++++++++++++++++++++++++++++++++
// String method
// ++++++++++++++++++++++++++++++++++++++++


// let mesg = "    Hello      ";
// console.log(mesg);
// console.log(mesg.trim());


//  let password = prompt("set your Password")
     
//  console.log(password.trim());
//  console.log(password);




// let str = "Random String";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// let  userName = "sshardha";

// console.log(userName.indexOf("sh")); 1
// console.log(userName.indexOf("s")); 0
//console.log(userName.indexOf("sy")); -1



// let str = "    Himanshu Kumar           ";

// console.log(str.trim().toUpperCase());




//  let str = "ILoveCoding";

//  console.log(str.slice(1,4)); //lov

//  console.log(str.slice(-2, -3));


// let str = "ILoveCoding";

// console.log(str.replace("Love", "Do"));

// let str = "Mango";

// console.log(str.repeat(3));


// let msg = "help!";

// console.log(msg.trim().toUpperCase());


//  let webName = "ApnaCollege";
 //console.log(webName.slice(4,9));
 //console.log(webName.indexOf("na"));  

// console.log(webName.replace("Apna","Our"));

// console.log(webName.slice(4).replace('l','t'));



// ++++++++++++++++++++++++++++++++++++++++
// Array
// ++++++++++++++++++++++++++++++++++++++++

// let student = ["Himansu", "shardha", "ram", "sita"];

// student[0] = "Mothit";
// console.log(student);

// student[10] = "Another";

//console.log(typeof student[5]);


let cars = ["audi", "bmw", "xuv", "maruti"];
// cars.push("toyoto");
// console.log(cars);
// cars.push('ferrari');


// console.log(cars.pop());
// console.log(cars);


// console.log(cars);
// cars.unshift("toyoto");
// console.log(cars);


// let followers = ["a", "b", "c"];
// let blocked = followers.shift();


// let months = ["january", "july", "march","august"];

// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");


// console.log(months);




// let primary = ["red", "yellow", "blue"];
// console.log(primary.indexOf("red"));
// console.log(primary.includes("yellow"));

//slice

// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

// console.log(colors.slice(2,4));
// console.log(colors.slice());
// console.log(colors.slice(-3, -1));


// console.log(colors);

// let newColors = colors.splice(1, 2, "newitem");
// console.log(newColors);

// console.log(colors);

// colors.sort();

// console.log(colors);

// let char = ['b', 'a', 'd', 'c'];
// console.log(char.sort());

// let marks =  ["100", "45", "99", "89", "67"];
// console.log(marks.sort((a, b) => a-b));




//let months = ["january", "july", "march", "august"];

// months.splice(0, 2, "july", "june");
// console.log(months);

// let programmingLang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];

// console.log(programmingLang.reverse().indexOf("javascript"));


//console.log("name" === "name"); // true

// console.log([1] === [1]); //false
// arrray References
//  let arr = [1, 2, 3];
//  let arrCopy = arr;
//  arrCopy.push(4);
//  console.log(arr);

// console.log(arr === arrCopy);

// const array

// const arr = [1,2,3,4];
// const copy = arr;
// copy.push(5);
// console.log(arr);



// let nums = [[2, 4], [3, 6], [4,8]];
// console.log(nums[1][0]);

  //let game = [['X','null', 'O'], ["null", 'X', 'null'], ['O', 'null', 'X']]

//  console.log(game[0][1]);
// game[0][1] = 'O'
// console.log(game);

// ++++++++++++++++++++++++++++++++++++++++
     // Assigment
// ++++++++++++++++++++++++++++++++++++++++

   let num = [7, 9, 0, -2];
   let n = 3;
    let result = num.slice(0, n);
    console.log(result);

    let lastresult = num.slice(-n);
    console.log(lastresult);


    let str2 = "abcdefghijklmnopqrstuvwxyz";
    if(!str2){
      console.log("String is blank");
    }else {
        console.log("string is not blank");
    }


    let char = ['A', "b", "C", "d", "f"];
    let i = 1
   let str1 = "abcdefghijklmnopqrstuvwxyz";
if(str1.includes(char[i])){
    console.log("given character is lowerCase");

} else {
    console.log("Given character is in upper case");
}


let str3 = "     Himanshu Kumar    ";
console.log(str3.trim());


console.log(char.includes("b"));










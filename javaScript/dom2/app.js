// let btns = document.querySelectorAll('button');

// console.dir(btn);

// btn.onclick = function(){
//     console.log('button ws clicked');
//     alert("Button was clicked")
// }

// function sayHello(){
//     alert("hello");
// }

// function sayName(){
//     alert("apna college")
// }

// for( let btn of btns){
//    btn.onclick = sayHello;
//    btn.onmouseenter = function(){
//     console.log("You entered a button");
//    }
// }

//btn.onclick = sayHello;

// for(let btn of btns){
//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", ()=> {
//         console.log("you double clicked me");
//     })
// }

// const h1Elem = document.querySelector("h1");
// const btn = document.querySelector("button");
// const colorBox = document.querySelector(".color-box");

// function gererateRandomColor() {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256 );
//   let blue = Math.floor(Math.random() * 256);

//   colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//   h1Elem.innerText = `rgb(${red}, ${green}, ${blue})`;
// }

// btn.addEventListener("click", gererateRandomColor);

// let p = document.querySelector('p');
// p.addEventListener("click", ()=> {
//     console.log("para was clicked");
// })

// let box =  document.querySelector('.box');
// box.addEventListener('mouseenter', ()=> {
//     console.log("mouse inside box");
// })

// let btn = document.querySelector('button');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let p = document.querySelector('p');

// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue"
// }

// btn.addEventListener('click',changeColor);
// h1.addEventListener('click', changeColor)
// h3.addEventListener('click', changeColor)
// p.addEventListener('click', changeColor)

//let btn = document.querySelector("button");

// btn.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("button clicked");
// });

// btn.addEventListener("dblclick", function (e) {
//     console.log(e);
//     console.log("button double clicked");

// });


//let inp = document.querySelector('input');
// inp.addEventListener("keydown", (e)=> {
//     console.log(e.code);
//     console.log(e.key);
//     console.log('key was pressed');
// })



// inp.addEventListener("keydown", (event) => {
//     console.log("code =  ", event.code);
//     if(event.code == "ArrowUp"){
//         console.log("character moves forward");
//     }

//     else if(event.code = "ArrowDown"){
//         console.log("characte moves backword");
//     }
//     else if(event.code = "ArrowLeft"){
//         console.log("characte moves left");
//     }
//     else if(event.code = "ArrowRight"){
//         console.log("characte moves right");
//     }


// })





// let form = document.querySelector("form");

// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log("form submit");
// })







// let form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//       event.preventDefault();
//       //let input = document.querySelector('input');
//       console.dir(form);
//        let input = form.elements[0];
//        console.log(input.value);
//       //let pass = document.querySelector("#userPass");
//       let pass = form.elements[1];
//       console.log(pass.value);

// })





// let form  =document.querySelector('form');
// let p  =  document.querySelector('p');

// let text = document.querySelector('#text');
// text.addEventListener("input", function(){
//     p.innerText = text.value;
// })


//Home work


// const btn = document.createElement('button');
// const body = document.querySelector('body');
// btn.innerText  =  'Clicked me!'
// body.append(btn);

// btn.addEventListener("click", ()=> {
//     btn.style.backgroundColor = 'green';
// })


const h2 = document.querySelector('h2');

const inp = document.querySelector('input');

function handleName(event){
     let possibleStr = `abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
      //let arr = (event.value).split("");
      console.log(event.value);

    //   let name = "";

    //   for(let char of arr){
    //     if(possibleStr.contains(str)){
    //         name += char;
    //     }
    //   }
    //   h2.innerText = name;


}

inp.addEventListener("change", (event)=> {
    console.dir(event);
    console.log("Change input", event.value);
    //handleName(event);
});












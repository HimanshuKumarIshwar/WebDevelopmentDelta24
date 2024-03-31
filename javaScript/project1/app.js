const h3 = document.querySelector("h3");

let gameSeq = [];
let userSeq = [];
let highestScore = 0;

let started = false;
let level = 0;
let btns = ["yellow", "red", "green", "purple"];

document.addEventListener("keypress", function () {
  if (started === false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 100);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 100);
}

function levelUp() {
  userSeq = [];
  level++;
  if(level > highestScore){
    highestScore = level;
    document.querySelector('h2').innerText = `Highest score ${highestScore}`
  }
  h3.innerHTML= `Level ${level}`;
  let randomIndx = Math.floor(Math.random() * 3);
  let randomBtn = document.querySelector(`.${btns[randomIndx]}`);
  gameFlash(randomBtn);
  gameSeq.push(btns[randomIndx]);
  console.log(gameSeq);
}


function checkAns(idx) {
  if (gameSeq[idx] == userSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
   } else {
     h3.innerText = `Game over! you score was  ${level} press any key to start`;
     document.querySelector('body').style.backgroundColor = 'red';
     setTimeout(()=> {
        document.querySelector('body').style.backgroundColor = 'white';
     }, 200)
     reset();
  }
  
}

function btnPress() {
  console.log("btn was pressed");
  let btn = this;
  userFlash(btn);
  let btnColor = btn.getAttribute("id");
  userSeq.push(btnColor);
  checkAns(userSeq.length - 1);
}

const allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}


function reset(){
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
}
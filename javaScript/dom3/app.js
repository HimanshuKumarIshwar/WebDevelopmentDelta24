// const div = document.querySelector('div');
// const ul = document.querySelector('ul');
// const lis = document.querySelectorAll('li');


// div.addEventListener("click", ()=> {
//     console.log("div was click");
// })

// ul.addEventListener('click', (event)=> {
//     event.stopPropagation();
//     console.log("ul was clicked");
// })

// for( let list of lis){
//     list.addEventListener('click', (event)=> {
//         event.stopPropagation();
//         console.log("li was clicked");
//     })
// }




const input = document.getElementById("task");
const btn = document.querySelector('button');
const box = document.querySelector('.task-box');

function handleInput(){
    const para = document.createElement('p');
    if(input.value){
        para.innerHTML =  `${input.value} <button id="delete">delete</button>`;
        box.append(para);
        input.value = ""

    }
   
}



btn.addEventListener('click', handleInput);

box.addEventListener("click", function(event){
  let curElem = event.target;
  if(curElem.nodeName == 'BUTTON'){
   curElem.parentElement.remove();
  }
})
 



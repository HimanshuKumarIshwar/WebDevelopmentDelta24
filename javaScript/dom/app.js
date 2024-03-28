

//  const imgObj = document.getElementById("mainImg");
//  console.log(imgObj);

//Home work

const containerElem = document.querySelector(".container-homework");

const pElem = document.createElement('p');
pElem.innerText = `Hey I'm red`;
pElem.classList.add('red');

containerElem.append(pElem);

const h3Elem = document.createElement('h3');
h3Elem.innerText = `I'm a blue h3!`
h3Elem.classList.add("blue");

containerElem.append(h3Elem);

const div = document.createElement("div");
div.classList.add("divStyle");
const h1Elem =  document.createElement("h1");
h1Elem.innerText = `I' m in a div`;
div.append(h1Elem);

const divP = document.createElement('p');
divP.innerText = `ME TOO!`;
div.append(divP)


containerElem.append(div);


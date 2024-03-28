const mainBox  = document.querySelector(".main-box");

const inputElem = document.createElement('input');
const btn1 = document.createElement('button');
btn1.innerText = `Click me`;

mainBox.append(inputElem);
mainBox.append(btn1);

inputElem.setAttribute('placeholder','username');
btn1.setAttribute('id', "btn");



document.querySelector('#btn').classList.add('button-style');




const h1Elem = document.createElement("h1");
h1Elem.innerHTML = `<u> DOM Practice </u>`;
h1Elem.style.color = 'purple';
mainBox.append(h1Elem)


const para1 = document.createElement('p');
para1.innerHTML = `Apna College <b>Delta</b> Practice`;
mainBox.append(para1)

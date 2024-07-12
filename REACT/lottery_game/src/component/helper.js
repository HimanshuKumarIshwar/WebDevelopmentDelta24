
function genTicket(n){
    let arr = new Array(n);
    for(let i = 0; i< arr.length; i++){
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function sum(arr){
  return   arr.reduce((val, cur) => val + cur, 0);
}

 export {genTicket, sum}
const generateTicket = (n)=> {
    let arr = new Array(n);
    for(let i = 0; i < 3; i++){
        arr[i] = Math.floor(Math.random()*10)
    }
    return arr;

}

const sum = (arr)=> {
  return   arr.reduce((sum, cur)=> sum + cur, 0);
}


export {generateTicket, sum}



import React, { useEffect, useState } from 'react'

function Counter() {
    const[count, setCount] = useState(0);

   const incCount = ()=> {
    setCount((count)=> count+1)
   }
    
   useEffect(function helper(){
     console.log("use Effect called")
   }, [count])

  return (
    <div>
        <p>Counter: {count}</p>
        <button onClick={incCount}>+1</button>
    </div>
  )
}

export default Counter
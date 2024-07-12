import React, { useState } from 'react'




function Couter() {
    let [count, setCount] = useState(0);
    const increseCount = ()=> {
        setCount((count)=> count+1);
        setCount((count)=> count+1)
        setCount((count)=> count+1)
    }
    

 return (
    <div>
     <h1>State in react</h1>
     <p>Counter: {count}</p>
     <button onClick={increseCount}>Increase</button>
    </div>
  )
}

export default Couter
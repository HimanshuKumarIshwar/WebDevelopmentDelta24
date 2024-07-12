import React from 'react'
import {useState} from 'react'
function Form() {
   const[fullName, setFullName] = useState("");

 const handleFullName  = (event)=> {
      setFullName(event.target.value);
 }
 const handelSubmit = (event)=>  {
    event.preventDefault();
    alert(`Hello ${fullName}`)
    setFullName("");
 }
  return (
    <div>
        <form onSubmit={handelSubmit} >
            <label htmlFor="username">Enter Full Name</label>
           <input type="text" placeholder='Enter full Name' id="username" value={fullName} onChange={handleFullName}/>
           <button>submit</button>
        </form>
    </div>
  )
}

export default Form
import React from 'react'
const handleFormSubmit = (event)=>{
    event.preventDefault();
    console.log("Form was submit");
}



function Form () {
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder='enter something' />
        <button>Submit</button>
      </form>

         </>
  )
}

export default Form
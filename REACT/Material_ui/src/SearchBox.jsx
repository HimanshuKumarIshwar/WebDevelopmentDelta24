import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
function SearchBox() {
const[city, setCity] = useState("")

 const handleChange  = (event) => {
    
       setCity(event.target.value)
 }

 const handleSubmit = (event)=> {
   event.preventDefault();
   console.log(city)
   setCity("")

 }
  return (
    <div className='search-box'>
        <h1>Search your city Weather</h1>
        <form  onSubmit={handleSubmit}>
        <TextField id="city" label="city" variant="outlined" value={city} onChange={handleChange}/>
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button>
        </form>


    </div>
  )
}

export default SearchBox
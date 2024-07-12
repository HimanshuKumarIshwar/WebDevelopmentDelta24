import React from 'react'
import {useState}  from 'react'
function MultipuleInputForm() {
   const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: ""
   })

   const handleFormData = (event)=> {
      setFormData((data)=>{
        return {...data, [event.target.name]:event.target.value}
      })
   }
   const handleFormSubmit  = (event)=> {
       event.preventDefault();
       console.log(formData)
       setFormData({
        fullName: "",
        userName: "",
        password: ""
       })
   }

  return (
    <div>
    <form onSubmit={handleFormSubmit}>
        <label htmlFor="fullName">Enter Full Name</label>
        <input type="text" id='fullname'value={formData.fullName} name='fullName' onChange={handleFormData}/>
        <br /><br />
        <label htmlFor="userName">Enter User Name</label>
        <input type="text" id='userName'value={formData.userName} name='userName' onChange={handleFormData} />
        <br /><br />
        <label htmlFor="password">Enter Password</label>
        <input type="password" id='password'value={formData.password} name='password' onChange={handleFormData} />
        <button>Submit</button>
    </form>
    </div>
  )
}

export default MultipuleInputForm
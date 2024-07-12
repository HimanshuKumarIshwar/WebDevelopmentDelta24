import React from 'react'
import {useState} from 'react'
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.userName) {
    errors.userName = ' user name is Required';
  } 

  return errors;
};


function CommentForm({addComment}) {

    // const [formData, setFormData] = useState({
    //       userName: "",
    //       remark: "",
    //       rating: 5
    // })

    const formik = useFormik({
      initialValues: {
        userName: '',
        remark: "",
        rating: 5
      },
      validate,
      onSubmit: values => {
        // alert(JSON.stringify(values, null, 2));
        addComment(values);
      },
    });


  // const handleInputChange = (event)=> {
  //      setFormData((data)=> {
  //       return {...data, [event.target.name]: event.target.value}
        
  //      })
  // }

  // const handleFormSubmit = (event)=> {
  //     event.preventDefault();
  //      setFormData({
  //       userName: "",
  //         remark: "",
  //         rating: 5
  //      })
  //      addComment(formData);
  // }



  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="userName">Enter user Name</label>
            <input type="text" id='userName' name='userName'placeholder='Enter user name' value={formik.values.userName} onChange={formik.handleChange} />
            {formik.errors.userName ? <p style={{color: "red"}}>{formik.errors.userName}</p> : null}
            <br />

            <label htmlFor="remark">Remarks</label>
            <textarea name="remark" id="remark" placeholder='Remarks' value={formik.values.remark} onChange={formik.handleChange}></textarea>
           
            <br /><br />

            <label htmlFor="rating">Rating</label>
            <input type="number" name="rating" id="rating" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} />
            <br /><br />
            <button type='submit'>Submit</button>
            
        </form>

    </div>
  )
}

export default CommentForm
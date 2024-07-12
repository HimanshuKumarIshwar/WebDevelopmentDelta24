import React, { useState } from 'react'
import CommentForm from "./CommentForm"
import "./comment.css"
function Comment() {
  const[comment, setComment] = useState([{
    userName: "@hki",
    remark: "Nice Place",
    rating: 5
  }])

  let addComment = (newComment)=> {
     setComment((comment)=> {
        return [...comment, newComment]
     })
  }
  return (
    <>
      <div>
        <h1>All Comments</h1>
           {comment.map((comment, idx)=> (
               <div key={idx} className='card'>
                 <h3>{comment.remark} <span>(ratinng- {comment.rating}</span></h3>
                <p><i>{comment.userName}</i></p>

                </div>
           ))}
      </div>
      <hr />
      <CommentForm addComment ={addComment}/>
    </>
  )
}

export default Comment
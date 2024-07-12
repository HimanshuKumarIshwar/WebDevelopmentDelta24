import React, { useState } from 'react'




function LikeButton() {
const[isLiked, setIsLiked] = useState(false);
let style = {
    color: "red"
}
   const handleLiked = ()=> {
     setIsLiked(!isLiked);
   }

  return (
    <div>
        <div onClick={handleLiked}>
        {
            isLiked ? <i class="fa-solid fa-heart" style={style}></i>: <i class="fa-regular fa-heart"></i>
        }
        </div>
    </div>
  )
}

export default LikeButton
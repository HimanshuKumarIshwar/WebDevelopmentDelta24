import React from 'react'
const handleClick = ()=> {
    console.log("Button ws clicked");
}
const handelMouseOver = ()=> {
    console.log("mouse Over");
}
function Button() {
  return (
    <>
    <div onClick={handleClick}>Button</div>
    <p onMouseOver={handelMouseOver}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere reprehenderit enim ad.</p>
    </>
  )
}

export default Button
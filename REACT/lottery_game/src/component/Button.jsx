import React from 'react'
import "../style/lottery.css"
function Button({action}) {
  return (
   <button onClick={action} className='ticket-btn'>Buy Ticket</button>
  )
}

export default Button
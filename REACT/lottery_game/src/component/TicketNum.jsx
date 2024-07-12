import React from 'react'
import "../style/ticketNum.css"

function TicketNum({num}) {
  return (
    <span className='ticket-num'>{num}</span>
  )
}

export default TicketNum
import React from 'react'
import TicketNum from './TicketNum'
import "../style/ticket.css"
 function Ticket({ticket}) {
  return (
    <>
    <div className='ticket'>
        <p>Ticket</p>
       {ticket.map((num, idx)=>{
        return <TicketNum num = {num} key={idx}/>
       })}
</div>
    </>
  )
}

export default Ticket;
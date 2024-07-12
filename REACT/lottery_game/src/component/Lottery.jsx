import React, { useState } from 'react'
import { genTicket, sum } from './helper'
import Ticket from './Ticket';
import "../style/lottery.css"
import Button from './Button';
function Lottery({n=3,   winCondition}) {
    const[ticket, setTicket] =useState(genTicket(n));

   const isWining = winCondition(ticket);

 const buyTicket = ()=> {
    setTicket(genTicket(n));
 }


  return (
    <>
    <Ticket ticket={ticket}/>
    <Button action={buyTicket}/>
    <h2>{isWining && `Congratulation's You Win`}</h2>
    </>
  )
}

export default Lottery
import React from 'react'
import { generateTicket, sum } from './helper'
import "./lottery.css"
import { useState } from 'react';
function Lottery() {
 const[ticket, setTicket] = useState(generateTicket(3));
    const iswin = sum(ticket) === 15;
    const buyTicket = ()=> {
        setTicket(generateTicket(3));
    }
  return (
    <>
    <h1>Lottery Game</h1>

    <div className="lottery">
      <span>{ticket[0]}</span>
      <span>{ticket[1]}</span>
      <span>{ticket[2]}</span>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp; 
     <button onClick={buyTicket}>BuyTicket</button>  

    <h2>{iswin && `congratulations's You won`}</h2>
  </>
  )
}

export default Lottery
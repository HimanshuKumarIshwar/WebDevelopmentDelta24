import React, { useState } from 'react'

function LudoBoard() {
  const[moves, setMoves] = useState({blue:0, yellow:0, green: 0, red: 0})
   const [arr, setArr] = useState(["no moves"])




   const handleBlueBtn = ()=> {
          setMoves((prevMoves)=>{
            return {...moves, blue:moves.blue+1}
           })
           setArr((prevArr)=> {
            return [...prevArr, "blue moves"]
          })
          console.log(arr)
   }

  
   const handleYellowBtn = ()=> {
    setMoves((prevMoves)=> {
        return {...moves, yellow:moves.yellow+1}
    })
   }
   
    

const handleGreenBtn = ()=> {
    setMoves({...moves,green:moves.green+1})
}
const handleRedBtn = ()=> {
    setMoves({...moves, red:moves.red+1})
}
  




  return (
    <>
     <div className='ludo-board'>
        <div className="ludo-section">
        <p>Blue Moves: {moves.blue}</p>
        <button style={{backgroundColor:'blue'}} onClick={handleBlueBtn}>+1</button>
        </div>
        <div className="ludo-section">
        <p>Yellow Moves: {moves.yellow}</p>
        <button style={{backgroundColor:'yellow'}} onClick={handleYellowBtn}>+1</button>
        </div>
        <div className="ludo-section">
        <p>Green Moves: {moves.green}</p>
        <button style={{backgroundColor:'green'}} onClick={handleGreenBtn}>+1</button>
        </div>
        <div className="ludo-section">
        <p>Red Moves: {moves.red}</p>
        <button style={{backgroundColor:'red'}} onClick={handleRedBtn}>+1</button>
        </div>
     </div>


    </>
  )
}

export default LudoBoard
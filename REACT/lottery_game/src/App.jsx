import { useState } from 'react'
import './App.css'

import Lottery from './component/Lottery';


function App() {
   const winCondition = (arr)=> {
   return arr.every((num)=> num===arr[0]);
   }
  return (
  <>
 <Lottery n ={3} winCondition = {winCondition}/>
  </>
  )
}

export default App;

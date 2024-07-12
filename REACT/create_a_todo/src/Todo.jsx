import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
function Todo() {

  const[todoArr, setTodoArr] = useState([{task:"sample", id: uuidv4(), isCompleted: false}]);
  const [todoValue, setTodoValue] = useState("");
    
  const handleToDo = ()=> {
         setTodoArr((prevArr)=> {
            return [...prevArr, {task: todoValue, id: uuidv4(), isCompleted: false}]
         })
         setTodoValue("");
  }

  const handleTodoValue = (event)=> {
    setTodoValue(event.target.value);
  }


  const deleteTodo = (id)=> {
    setTodoArr((prevArr) => {
    return  prevArr.filter((todo)=> todo.id != id);
    })
  }

  const convertToUpperCase = ()=> {
        setTodoArr((prevArr)=>(
          prevArr.map((todo)=> {
            return {...todo, task: todo.task.toUpperCase()}
          })
        ) )    
          
  }

  const convertUpparCaseOne = (id)=> {
    setTodoArr((prevArr)=>(
      prevArr.map((todo)=> {

        if(todo.id == id){
          return {...todo, task: todo.task.toUpperCase()}
        }else {
          return todo;
        }
       
      })
    ) )  



  }

  const  taskCompleted = (id)=> {
    setTodoArr((prevArr)=>(
       prevArr.map((todo)=> {
        if(todo.id == id){
          return {...todo, isCompleted: true}
        }else {
          return todo;
        }
       })
    ))
  }

  return (
    <div>
  <h1>Todo  App</h1>

  <br /><br /><br />
    <input type="text" onChange={handleTodoValue} value={todoValue}/>
    <button onClick={handleToDo}>Add</button>

    <br /><br /><br /><br />
    <hr />
    <h3>Todo</h3>

    <ul>
       {
       todoArr.map((todo)=> (
        <li  key={todo.id}>
          <button onClick={()=>taskCompleted(todo.id)}>clickToCompleted</button>
            {
             todo.isCompleted ? <strike>{todo.task}</strike> : <span>{todo.task}</span>
          }
          
            
         &nbsp; &nbsp; &nbsp;
          <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
          <button onClick={()=> convertUpparCaseOne(todo.id)}>ConvertUpparCase</button>
          
          </li>
       ))

       }

    </ul>
    &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
    <button onClick={convertToUpperCase}>ConvertAllTo Uppercase</button>
      
    </div>
  )
}

export default Todo
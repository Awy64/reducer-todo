import React, { useState, useReducer } from 'react';
//installed materal ui for textfield style
import {TextField, Button} from '@material-ui/core'

import {todoReducer, initialTodoState} from '../reducers/reducer'


const TodoList = () => {
  // Reducer set for todo state
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
  console.log(todoState)
  const [todo, setTodo] = useState('')
  const handleChange = e => {
    setTodo(e.target.value)
  }


  return(
    <div>
      <h1>TodoList</h1>
      <form noValidate autoComplete="off" >
        <TextField onChange={handleChange}  /> 
        <Button variant="contained" onClick={() => dispatch({type: 'ADD_TODO', payload: todo})} >Submit</Button>
        <Button variant="contained" onClick={() => dispatch({type: 'CLEAR_TODO'})} >Clear</Button>
      </form>
      {todoState.map(e => {
        return(<p key={e.id} onClick={() => dispatch({type: 'TOGGLE_COMPLETE', payload: e.id})} className={e.completed ? "completed" : ""} >{e.item}</p>)
        
      })}
    </div>
  )
}


export default TodoList;

//initial state const
export const initialTodoState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}]
//reducer
export const todoReducer = (state, action) => {
  if (action.type === "ADD_TODO" ) {
    const newTodo = {
      item: action.payload,
      completed: false,
      id: Date.now()
    }
    return([
      ...state, newTodo
    ])
  }else if (action.type === "TOGGLE_COMPLETE") {
    return(
    state.map(todo => {
    if (action.payload === todo.id) {
      return {
        ...todo,
        completed: !todo.completed
      }
    }
    return todo;
  }))

  }else if (action.type === 'CLEAR_TODO') {
    return(
      state.filter(todo => {
        return !todo.completed
      })
    )
  }
  return state
}
//both have been exported
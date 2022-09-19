import React, { useState, useEffect, ChangeEvent } from 'react'

import useTodoState from '../hooks/useTodoState'


const Todo: React.FC = () => {
  const [items, input, addItem, handleOnChange, handleDelete, getTodoItem] = useTodoState()
  return (
    <ul >
      <input onChange={ handleOnChange } value={ input }/>
        { getTodoItem() }
      <button onClick={ addItem }>addItem</button>
    </ul>)
}

export default Todo
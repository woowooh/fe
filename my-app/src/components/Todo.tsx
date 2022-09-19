import React, { useState, useEffect, ChangeEvent } from 'react'
import TodoItem from './TodoItem'


const Todo: React.FC = () => {
  const [items, setItems ] = useState([{ message: 'ww' }])
  const [input, setInput] = useState<any>("")
  const addItem = () => {
    const item2 = [...items, { message: input }]
    setItems(item2)
    setInput("")
  }
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const handleDelete = (index: number) => {
    const l2 = [...items]
    l2.splice(index, 1)
    setItems(l2)
  }
  const getTodoItem = () => {
    return items.map((item, index) => {
        return (<TodoItem key={index} index={ index } message={ item.message } itemDelete={ handleDelete }/>)
      })
  }
  return (
    <ul >
      <input onChange={ handleOnChange } value={ input }/>
      { getTodoItem() }
      <button onClick={ addItem }>addItem</button>
    </ul>)
}

export default Todo
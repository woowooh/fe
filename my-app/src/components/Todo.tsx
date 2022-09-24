import React, { useState, useEffect, ChangeEvent, useCallback } from 'react'

import TodoItem from '../components/TodoItem'


// import useTodoState from '../hooks/useTodoState'


const Todo: React.FC = () => {
  // const [items, input, addItem, handleOnChange, handleDelete, getTodoItem] = useTodoState()
   console.log("call render")
  const [items, setItems ] = useState([
      { message: 'ww' }
    ])
  const [input, setInput] = useState<any>( "" )
  const addItem = () => {
    const item2 = [...items, { message: input }]
    setItems(item2)
    setInput("")
  }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  // return [items, input, addItem, handleOnChange, handleDelete, getTodoItem]
  return (
    <ul >
      <input onChange={ handleOnChange } value={ input }/>
        { getTodoItem() }
      <button onClick={ addItem }>addItem</button>
    </ul>)
}

// useMemo wrapper func，避免子组件 or 其他重复计算 cache[result] : render props, state
// 
export default Todo
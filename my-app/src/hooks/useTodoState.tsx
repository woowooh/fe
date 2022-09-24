import React, { useState, useEffect, useMemo, useCallback } from 'react'
import TodoItem from '../components/TodoItem'


const useTodoState = () => {
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
  const getTodoItem = useCallback(() => {
    return items.map((item, index) => {
        return (<TodoItem key={index} index={ index } message={ item.message } itemDelete={ handleDelete }/>)
      })
  }, [items])
  return [items, input, addItem, handleOnChange, handleDelete, getTodoItem]
}

export default useTodoState
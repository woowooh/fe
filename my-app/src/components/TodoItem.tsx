import React, { useState, useEffect } from 'react'


interface ITodoItemProps {
  message: string
  index: number
  itemDelete: any
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const { itemDelete, index, message } = props
  const deleteMe = () => {
    itemDelete(index)
  }
  return (
      <li onClick={() => deleteMe()}> { message } </li>
    )
}

export default TodoItem
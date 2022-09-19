import React, { useState, useEffect } from 'react'


interface ITodoItemProps {
  message: string
  index: number
  itemDelete: any
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const itemDelete = () => {
    props.itemDelete(props.index)
  }
  return (
      <li onClick={() => itemDelete()}> {props.message} </li>
    )
}

export default TodoItem
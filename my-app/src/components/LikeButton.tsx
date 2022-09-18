import React, { useState, useEffect } from 'react'
import useMousePosition from '../hooks/useMousePosition'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    const positions = useMousePosition()
    useEffect(() => {
      console.log("document title effect is running ")
      document.title = `点击了 ${like}次`
    }, [like])
    return (
        <div>
          <h2> 
            X: {positions.x} Y: {positions.y}
          </h2>
          <button onClick={() => { setLike(like + 1)}}>
            {like} 👍🏻
          </button>
          <button onClick={() => { setOn(!on)}}>
            {on ? 'on' : 'off'}
          </button>
        </div>
      )
}

export default LikeButton
import { useState } from 'react'
import './App.css'
import Board from './Board'
import Arrows from './Arrows'

export default function App() {
  const [position, setPosition] = useState({ top: 50, left: 50 })

  const handleMove = (x, y) => {
    setPosition(({left, top}) => {
      const newPosition = {
        left: left + x,
        top: top + y
      };
      if (newPosition.left < 5) newPosition.left = 5;
      if (newPosition.left > 95) newPosition.left = 95;
      if (newPosition.top < 5) newPosition.top = 5;
      if (newPosition.top > 95) newPosition.top = 95;

      return newPosition;
    })
  }

  return (
    <>
      <Board position={position}/>
      <Arrows onMove={handleMove}/>
    </>
  )
}

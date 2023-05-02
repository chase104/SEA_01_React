import React from 'react';
import './board.css';
import Square from './square.js';

const Board = () => {
  
  return (
    <div className="board-container">
        <Square  />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
    </div>
  )
}

export default Board

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDrag } from 'react-dnd';
import './piece.css';

const Piece = ({ type, color, position, label }) => {

  const [moves, setMoves] = useState([]);
  // const [history, setHistory] = useState([]);
  // const [current, setCurrent] = useState([]);

  // useEffect(() => {

  //   if (current[0] !== position[0] || current[1] !== position[1]) {
  //     setHistory(history => [...history, position])
  //     setCurrent(position);
  //   }
  // }, [position, current]);

  // useEffect(() => {
  //   console.log(history);
  // }, [history]);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'piece',
    item: { type, color, position, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`piece ${color}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {/* <span class="state"></span> */}
      {/* {type === 'k' && '♔'}
      {type === 'q' && '♕'}
      {type === 'r' && '♖'}
      {type === 'b' && '♗'}
      {type === 'n' && '♘'}
      {type === 'p' && '♙'}
      {type === 'K' && '♚'}
      {type === 'Q' && '♛'}
      {type === 'R' && '♜'}
      {type === 'B' && '♝'}
      {type === 'N' && '♞'}
      {type === 'P' && '♟'} */}
      {type === 'w' && '♔'}
      {type === 'b' && '♚'}
    </div>
  );
};

export default Piece;
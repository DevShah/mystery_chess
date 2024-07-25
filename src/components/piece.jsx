import React from 'react';
import { useContext } from 'react';
import { useDrag } from 'react-dnd';
import './piece.css';
import { GameContext } from '../App';

const Piece = ({ type, color, position, label }) => {

  const { piecePossibilities, setHover } = useContext(GameContext);


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
      onMouseOver={() =>setHover(piecePossibilities[label].join(", "))}
      onMouseOut={() => setHover('')}
    >
      {type === 'w' && '♔'}
      {type === 'b' && '♚'}
    </div>
  );
};

export default Piece;
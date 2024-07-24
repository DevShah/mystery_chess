import React, { useContext } from 'react';
import Square from './square';
import { GameContext } from '../App';
import './chessboard.css';

const Chessboard = () => {

  const { board, handleMove } = useContext(GameContext);
  return (
    <div className="chessboard">
      {board.map((row, i) => (
        <div key={i} className="row">
          {row.map((piece, j) => (
            <Square
              key={j}
              piece={piece}
              isBlack={(i + j) % 2 === 1}
              position={[i, j]}
              onMove={handleMove}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Chessboard;

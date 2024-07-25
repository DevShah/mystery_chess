import React, { useContext } from 'react';
import Square from './square';
import { GameContext } from '../App';
import './chessboard.css';

const Chessboard = () => {
  const { board, handleMove } = useContext(GameContext);

  const renderSquare = (piece, i, j) => (
    <Square
      key={`${i}-${j}`}
      piece={piece}
      isBlack={(i + j) % 2 === 1}
      position={[i, j]}
      onMove={handleMove}
    />
  );

  const renderRow = (row, i) => (
    <div key={i} className="row">
      <div className="row-label">{8 - i}</div>
      {row.map((piece, j) => renderSquare(piece, i, j))}
    </div>
  );

  return (
    <div className="chessboard-container">
      <div className="chessboard">
        {board.map((row, i) => renderRow(row, i))}
      </div>
      <div className="column-labels">
        <div className="corner"></div>
        {'abcdefgh'.split('').map((label, i) => (
          <div key={i} className="column-label">{label}</div>
        ))}
      </div>
    </div>
  );
};

export default Chessboard;

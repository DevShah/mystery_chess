import React, { createContext, useState } from 'react';
import Chessboard from './components/chessboard';
import './App.css';

const initialBoard = [
  ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7', 'w8'],
  ['w9', 'w10', 'w11', 'w12', 'w13', 'w14', 'w15', 'w16'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
  ['b9', 'b10', 'b11', 'b12', 'b13', 'b14', 'b15', 'b16'],
];

const GameContext = createContext();

const App = () => {
  const [board, setBoard] = useState(initialBoard);
  const [history, setHistory] = useState({
    'w1': [[0,0]],
    'w2': [[0,1]],
    'w3': [[0,2]],
    'w4': [[0,3]],
    'w5': [[0,4]],
    'w6': [[0,5]],
    'w7': [[0,6]],
    'w8': [[0,7]],
    'w9': [[1,0]],
    'w10': [[1,1]],
    'w11': [[1,2]],
    'w12': [[1,3]],
    'w13': [[1,4]],
    'w14': [[1,5]],
    'w15': [[1,6]],
    'w16': [[1,7]],
    'b1': [[6,0]],
    'b2': [[6,1]],
    'b3': [[6,2]],
    'b4': [[6,3]],
    'b5': [[6,4]],
    'b6': [[6,5]],
    'b7': [[6,6]],
    'b8': [[6,7]],
    'b9': [[7,0]],
    'b10': [[7,1]],
    'b11': [[7,2]],
    'b12': [[7,3]],
    'b13': [[7,4]],
    'b14': [[7,5]],
    'b15': [[7,6]],
    'b16': [[7,7]],
  });

  const [piecePossibilities, setPiecePossibilities] = useState({
    'w1':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w2':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w3':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w4':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w5':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w6':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w7':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w8':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w9':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w10': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w11': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w12': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w13': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w14': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w15': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'w16': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b1':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b2':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b3':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b4':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b5':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b6':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b7':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b8':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b9':  ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b10': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b11': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b12': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b13': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b14': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b15': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
    'b16': ['KING', 'QUEEN', 'ROOK', 'BISHOP', 'KNIGHT', 'PAWN'],
  });

  const determinePossiblePieces = (from, to) => {
    const [fromX, fromY] = from;
    const [toX, toY] = to;

    const possiblePieces = [];

    // Pawn
    if (fromX === toX && (toY === fromY + 1 || toY === fromY - 1)) {
      possiblePieces.push('PAWN');
    }

    // Rook
    if (fromX === toX || fromY === toY) {
      possiblePieces.push('ROOK');
    }

    // Bishop
    if (Math.abs(fromX - toX) === Math.abs(fromY - toY)) {
      possiblePieces.push('BISHOP');
    }

    // Queen
    if (fromX === toX || fromY === toY || Math.abs(fromX - toX) === Math.abs(fromY - toY)) {
      possiblePieces.push('QUEEN');
    }

    // Knight
    if ((Math.abs(fromX - toX) === 2 && Math.abs(fromY - toY) === 1) || (Math.abs(fromX - toX) === 1 && Math.abs(fromY - toY) === 2)) {
      possiblePieces.push('KNIGHT');
    }

    // King
    if (Math.abs(fromX - toX) <= 1 && Math.abs(fromY - toY) <= 1) {
      possiblePieces.push('KING');
    }

    return possiblePieces;
  };

  const handleMove = (from, to, piece) => {
    const possibilities = determinePossiblePieces(from, to);
    setPiecePossibilities(prevState => {
      const currentPossibilities = prevState[piece];
      let intersectPossibilities = currentPossibilities.filter(value => possibilities.includes(value));
      return {
        ...prevState,
        [piece]: intersectPossibilities
      };
    });

    const newBoard = [...board];
    newBoard[to[0]][to[1]] = newBoard[from[0]][from[1]];
    newBoard[from[0]][from[1]] = null;
    setBoard(newBoard);

    setHistory(prevState => {
      const currentHistory = prevState[piece];
      const newHistory = [...currentHistory, to];
      return {
        ...prevState,
        [piece]: newHistory
      };
    });
  };

  // console.log(piecePossibilities);


  return (
    <GameContext.Provider value={{ board, history, piecePossibilities, handleMove }}>
      <h1>Mystery Chess</h1>
      <div className="chessboard-container">
        <Chessboard />
      </div>
    </GameContext.Provider>
  );
};

export default App;
export { GameContext };

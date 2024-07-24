import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import Piece from './piece';
import './square.css';
import { GameContext } from '../App';

const Square = ({ piece, isBlack, position, onMove }) => {
  const { piecePossibilities } = useContext(GameContext);

  const isMovePossible = (from, to, pieceLabel, piecePossibilities) => {
    const possibilities = piecePossibilities[pieceLabel];
    const possibleMoves = determinePossiblePieces(from, to);
    return possibilities.some(possibility => possibleMoves.includes(possibility));
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'piece',
    canDrop: (item) => {
      return isMovePossible(item.position, position, item.label, piecePossibilities);
    },
    drop: (item) => {
      if (isMovePossible(item.position, position, item.label, piecePossibilities)) {
        onMove(item.position, position, item.label);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }), [piecePossibilities]);

  return (
    <div
      ref={drop}
      className={`square ${isBlack ? 'black' : 'white'}`}
      style={{ backgroundColor: isOver ? 'lightgreen' : '' }}
    >
      {piece && (
        <Piece
          type={piece.toLowerCase()[0]}
          label={piece}
          color={piece[0] === 'w' ? 'tan' : 'black'}
          position={position}
        />
      )}
    </div>
  );
};

// Helper function to determine possible pieces that could make a move
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

export default Square;

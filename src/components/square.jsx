import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import Piece from './piece';
import './square.css';
import { GameContext } from '../App';

const Square = ({ piece, isBlack, position, onMove }) => {
  const { piecePossibilities, board } = useContext(GameContext);

  const isMovePossible = (from, to, pieceLabel, piecePossibilities, board) => {
    const possibilities = piecePossibilities[pieceLabel];
    const possibleMoves = determinePossiblePieces(from, to);

    // Check if the destination position contains a piece of the same color
    const destinationPiece = board[to[0]][to[1]];
    if (destinationPiece && destinationPiece[0] === pieceLabel[0]) {
      return false; // Cannot move on top of a piece of the same color
    }

    // Check if the move is valid for the piece's possibilities
    const isMoveValid = possibilities.some(possibility => possibleMoves.includes(possibility));
    if (!isMoveValid) {
      return false;
    }

    // Check if the piece is a KNIGHT
    if (possibilities.includes('KNIGHT') && possibleMoves.includes('KNIGHT')) {
      return true; // Knights can jump over other pieces
    }

    // Check if the path is clear for non-knight pieces
    const isPathClear = checkPathClear(from, to, board);
    if (!isPathClear) {
      return false;
    }

    return true;
  };


    // Helper function to check if the path is clear between two positions
  const checkPathClear = (from, to, board) => {
    const [fromX, fromY] = from;
    const [toX, toY] = to;

    const deltaX = Math.sign(toX - fromX);
    const deltaY = Math.sign(toY - fromY);

    let x = fromX + deltaX;
    let y = fromY + deltaY;

    while (x !== toX || y !== toY) {
      if (board[x][y] !== null) {
        return false; // There is a piece in the path
      }
      x += deltaX;
      y += deltaY;
    }

    return true;
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'piece',
    canDrop: (item) => {
      return isMovePossible(item.position, position, item.label, piecePossibilities, board);
    },
    drop: (item) => {
      if (isMovePossible(item.position, position, item.label, piecePossibilities, board)) {
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

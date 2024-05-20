import { SquareLetterType, SquarePieceType } from '@/shared/ui/square';

export const getStartPosition = (number: number, letter: SquareLetterType): SquarePieceType => {
  if (number === 8 && (letter === 'a' || letter === 'h')) return { name: 'rook', color: 'black' };
  if (number === 1 && (letter === 'a' || letter === 'h')) return { name: 'rook', color: 'white' };

  if (number === 8 && (letter === 'b' || letter === 'g')) return { name: 'knight', color: 'black' };
  if (number === 1 && (letter === 'b' || letter === 'g')) return { name: 'knight', color: 'white' };

  if (number === 8 && (letter === 'c' || letter === 'f')) return { name: 'bishop', color: 'black' };
  if (number === 1 && (letter === 'c' || letter === 'f')) return { name: 'bishop', color: 'white' };

  if (number === 8 && letter === 'd') return { name: 'queen', color: 'black' };
  if (number === 1 && letter === 'd') return { name: 'queen', color: 'white' };

  if (number === 8 && letter === 'e') return { name: 'king', color: 'black' };
  if (number === 1 && letter === 'e') return { name: 'king', color: 'white' };

  if (number === 2) return { name: 'pawn', color: 'white' };
  if (number === 7) return { name: 'pawn', color: 'black' };

  return { name: 'empty' };
};

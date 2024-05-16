export type SquareLetterType = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
export type SquareNumberType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type SquareNotationV = 'top' | 'bottom';
export type SquareNotationH = 'left' | 'right';

export type SquarePositionType =
  | SquareNotationH
  | SquareNotationV
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'other';

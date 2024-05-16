export type SquareLetterType = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
export type SquareNumberType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type SquarePositionHType = 'top' | 'bottom';
export type SquarePositionVType = 'left' | 'right';

export type SquarePositionType =
  | SquarePositionHType
  | SquarePositionVType
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'other';

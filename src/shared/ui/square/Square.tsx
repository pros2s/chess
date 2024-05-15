import { SquareLetterType, SquareNumberType } from './SquareType';

interface SquareProps {
  letter: SquareLetterType;
  number: SquareNumberType;
  bgColor?: string;
  className?: string;
}

export const Square = ({ className, letter, number, bgColor }: SquareProps) => (
  <div style={{ backgroundColor: bgColor }} className={`w-100 h-100 ${className}`}>
    <span>{letter}</span>
    <span>{number}</span>
  </div>
);

Square.displayName = 'Square';

import { classNames } from '@/shared/lib/helpers/classNames';

import { SquareLetterType, SquareNumberType } from './SquareType';

import cls from './Square.module.css';

interface SquareProps {
  letter: SquareLetterType;
  number: SquareNumberType;
  isNotation?: boolean;
  bgColor?: string;
  className?: string;
}

export const Square = ({ className, letter, number, bgColor, isNotation = false }: SquareProps) => (
  <div
    style={{ backgroundColor: bgColor }}
    className={classNames(cls.square, ['w-100', 'h-100', className])}
  >
    {isNotation && (
      <span className={cls.notation}>
        {letter}
        {number}
      </span>
    )}
  </div>
);

Square.displayName = 'Square';

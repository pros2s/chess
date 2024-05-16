import { classNames } from '@/shared/lib/helpers/classNames';

import {
  SquareLetterType,
  SquareNumberType,
  SquarePositionHType,
  SquarePositionType,
  SquarePositionVType,
} from './SquareType';
import { getNotations } from './helpers/getNotations';

import cls from './Square.module.css';

interface SquareProps {
  letter: SquareLetterType;
  number: SquareNumberType;
  isFullNotation?: boolean;
  position?: SquarePositionType;
  positionVType?: SquarePositionVType;
  positionHType?: SquarePositionHType;
  bgPrimary?: string;
  bgSecondary?: string;
  className?: string;
}

export const Square = ({
  className,
  letter,
  number,
  bgPrimary,
  bgSecondary,
  position = 'other',
  positionHType = 'bottom',
  positionVType = 'left',
  isFullNotation = false,
}: SquareProps) => {
  const { isLetNotation, isNumNotation, letClassPos, numClassPos } = getNotations({
    position,
    positionHType,
    positionVType,
  });

  return (
    <div
      style={{ backgroundColor: bgPrimary }}
      className={classNames(cls.square, ['w-100', 'h-100', className])}
    >
      {!isFullNotation && isLetNotation && (
        <p style={{ color: bgSecondary }} className={classNames(cls.notation, [cls[letClassPos]])}>
          {letter}
        </p>
      )}
      {!isFullNotation && isNumNotation && (
        <p style={{ color: bgSecondary }} className={classNames(cls.notation, [cls[numClassPos]])}>
          {number}
        </p>
      )}

      {isFullNotation && (
        <p style={{ color: bgSecondary }} className={cls.notation}>
          {letter}
          {number}
        </p>
      )}
    </div>
  );
};

Square.displayName = 'Square';

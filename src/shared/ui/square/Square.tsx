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
  bgColor?: string;
  className?: string;
}

export const Square = ({
  className,
  letter,
  number,
  bgColor,
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
      style={{ backgroundColor: bgColor }}
      className={classNames(cls.square, ['w-100', 'h-100', className])}
    >
      {!isFullNotation && isLetNotation && (
        <span className={classNames(cls.notation, [cls[letClassPos]])}>{letter}</span>
      )}
      {!isFullNotation && isNumNotation && (
        <span className={classNames(cls.notation, [cls[numClassPos]])}>{number}</span>
      )}

      {isFullNotation && (
        <span className={cls.notation}>
          {letter}
          {number}
        </span>
      )}
    </div>
  );
};

Square.displayName = 'Square';

import { classNames } from '@/shared/lib/helpers/classNames';

import {
  SquareLetterType,
  SquareNumberType,
  SquareNotationH,
  SquarePositionType,
  SquareNotationV,
  SquarePieceType,
  SquarePieceIconsType,
} from './SquareType';
import { getNotations } from './helpers/getNotations';

import cls from './Square.module.css';

interface SquareProps {
  letter: SquareLetterType;
  number: SquareNumberType;
  piece: SquarePieceType;
  icons: SquarePieceIconsType;
  isFullNotation?: boolean;
  position?: SquarePositionType;
  notationV?: SquareNotationV;
  notationH?: SquareNotationH;
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
  notationH,
  notationV,
  isFullNotation = false,
  icons,
  piece,
}: SquareProps) => {
  const { color, name } = piece;

  const { isLetNotation, isNumNotation, letClassPos, numClassPos } = getNotations({
    position,
    notationH,
    notationV,
  });

  const handleClickSquare = () => {
    console.log(name, color, `${letter}${number}`);
  };

  const getIcon = () => {
    if (color === 'white') return icons[name][0];
    if (color === 'black') return icons[name][1];

    return undefined;
  };

  return (
    <button
      style={{ backgroundColor: bgPrimary }}
      className={classNames(cls.square, ['w-100', 'h-100', className])}
      type='button'
      onClick={handleClickSquare}
    >
      {name !== 'empty' && (
        <img className={classNames(cls.piece, ['w-100', 'h-100'])} alt='piece' src={getIcon()} />
      )}

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
    </button>
  );
};

Square.displayName = 'Square';

import { SquareNotationH, SquarePositionType, SquareNotationV } from '../SquareType';

interface Notations {
  position: SquarePositionType;
  notationH: SquareNotationH;
  notationV: SquareNotationV;
}

export const getNotations = ({ position, notationH, notationV }: Notations) => {
  const isTop = position === 'top' && notationH === 'top';
  const isRight = position === 'right' && notationV === 'right';
  const isBottom = position === 'bottom' && notationH === 'bottom';
  const isLeft = position === 'left' && notationV === 'left';

  const isTopLeftNum = position === 'top-left' && notationV === 'left';
  const isTopRightNum = position === 'top-right' && notationV === 'right';

  const isTopLeftLet = position === 'top-left' && notationH === 'top';
  const isTopRightLet = position === 'top-right' && notationH === 'top';

  const isBottomLeftNum = position === 'bottom-left' && notationV === 'left';
  const isBottomRightNum = position === 'bottom-right' && notationV === 'right';

  const isBottomLeftLet = position === 'bottom-left' && notationH === 'bottom';
  const isBottomRightLet = position === 'bottom-right' && notationH === 'bottom';

  const letterNotations = [
    isTop,
    isBottom,
    isTopLeftLet,
    isTopRightLet,
    isBottomLeftLet,
    isBottomRightLet,
  ];
  const numberNotations = [
    isRight,
    isLeft,
    isTopLeftNum,
    isTopRightNum,
    isBottomLeftNum,
    isBottomRightNum,
  ];

  const isLetNotation = letterNotations.some((not) => not);
  const isNumNotation = numberNotations.some((not) => not);

  let letClassPos = '';
  let numClassPos = '';

  const isLetTop = isTop || isTopLeftLet || isTopRightLet;
  const isNumRight = isRight || isTopRightNum || isBottomRightNum;
  const isLetBottom = isBottom || isBottomLeftLet || isBottomRightLet;
  const isNumLeft = isLeft || isTopLeftNum || isBottomLeftNum;

  if (isLetTop && notationV === 'right') {
    letClassPos = 'let-top-right';
  }

  if (isNumRight && notationH === 'top') {
    numClassPos = 'num-top-right';
  }

  if (isLetBottom && notationV === 'right') {
    letClassPos = 'let-bottom-right';
  }

  if (isNumRight && notationH === 'bottom') {
    numClassPos = 'num-bottom-right';
  }

  if (isLetTop && notationV === 'left') {
    letClassPos = 'let-top-left';
    numClassPos = 'num-top-left';
  }

  if (isNumLeft && notationH === 'top') {
    numClassPos = 'num-top-left';
  }

  if (isLetBottom && notationV === 'left') {
    letClassPos = 'let-bottom-left';
  }

  if (isNumLeft && notationH === 'bottom') {
    numClassPos = 'num-bottom-left';
  }

  return { isLetNotation, isNumNotation, numClassPos, letClassPos };
};

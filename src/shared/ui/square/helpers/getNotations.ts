import { SquareNotationH, SquarePositionType, SquareNotationV } from '../SquareType';

interface Notations {
  position: SquarePositionType;
  notationH?: SquareNotationH;
  notationV?: SquareNotationV;
}

export const getNotations = ({ position, notationH, notationV }: Notations) => {
  const isTop = position === 'top' && notationV === 'top';
  const isRight = position === 'right' && notationH === 'right';
  const isBottom = position === 'bottom' && notationV === 'bottom';
  const isLeft = position === 'left' && notationH === 'left';

  const isTopLeftNum = position === 'top-left' && notationH === 'left';
  const isTopRightNum = position === 'top-right' && notationH === 'right';

  const isTopLeftLet = position === 'top-left' && notationV === 'top';
  const isTopRightLet = position === 'top-right' && notationV === 'top';

  const isBottomLeftNum = position === 'bottom-left' && notationH === 'left';
  const isBottomRightNum = position === 'bottom-right' && notationH === 'right';

  const isBottomLeftLet = position === 'bottom-left' && notationV === 'bottom';
  const isBottomRightLet = position === 'bottom-right' && notationV === 'bottom';

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

  if (isLetTop && notationH === 'right') {
    letClassPos = 'let-top-right';
  }

  if (isNumRight && notationV === 'top') {
    numClassPos = 'num-top-right';
  }

  if (isLetBottom && notationH === 'right') {
    letClassPos = 'let-bottom-right';
  }

  if (isNumRight && notationV === 'bottom') {
    numClassPos = 'num-bottom-right';
  }

  if (isLetTop && notationH === 'left') {
    letClassPos = 'let-top-left';
    numClassPos = 'num-top-left';
  }

  if (isNumLeft && notationV === 'top') {
    numClassPos = 'num-top-left';
  }

  if (isLetBottom && notationH === 'left') {
    letClassPos = 'let-bottom-left';
  }

  if (isNumLeft && notationV === 'bottom') {
    numClassPos = 'num-bottom-left';
  }

  return { isLetNotation, isNumNotation, numClassPos, letClassPos };
};

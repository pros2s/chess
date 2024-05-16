import { SquarePositionHType, SquarePositionType, SquarePositionVType } from '../SquareType';

interface Notations {
  position: SquarePositionType;
  positionVType: SquarePositionVType;
  positionHType: SquarePositionHType;
}

export const getNotations = ({ position, positionHType, positionVType }: Notations) => {
  const isTop = position === 'top' && positionHType === 'top';
  const isRight = position === 'right' && positionVType === 'right';
  const isBottom = position === 'bottom' && positionHType === 'bottom';
  const isLeft = position === 'left' && positionVType === 'left';

  const isTopLeftNum = position === 'top-left' && positionVType === 'left';
  const isTopRightNum = position === 'top-right' && positionVType === 'right';

  const isTopLeftLet = position === 'top-left' && positionHType === 'top';
  const isTopRightLet = position === 'top-right' && positionHType === 'top';

  const isBottomLeftNum = position === 'bottom-left' && positionVType === 'left';
  const isBottomRightNum = position === 'bottom-right' && positionVType === 'right';

  const isBottomLeftLet = position === 'bottom-left' && positionHType === 'bottom';
  const isBottomRightLet = position === 'bottom-right' && positionHType === 'bottom';

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

  if (isLetTop && positionVType === 'right') {
    letClassPos = 'let-top-right';
  }

  if (isNumRight && positionHType === 'top') {
    numClassPos = 'num-top-right';
  }

  if (isLetBottom && positionVType === 'right') {
    letClassPos = 'let-bottom-right';
  }

  if (isNumRight && positionHType === 'bottom') {
    numClassPos = 'num-bottom-right';
  }

  if (isLetTop && positionVType === 'left') {
    letClassPos = 'let-top-left';
    numClassPos = 'num-top-left';
  }

  if (isNumLeft && positionHType === 'top') {
    numClassPos = 'num-top-left';
  }

  if (isLetBottom && positionVType === 'left') {
    letClassPos = 'let-bottom-left';
  }

  if (isNumLeft && positionHType === 'bottom') {
    numClassPos = 'num-bottom-left';
  }

  return { isLetNotation, isNumNotation, numClassPos, letClassPos };
};

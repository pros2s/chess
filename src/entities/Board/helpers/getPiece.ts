import { PieceIconsType } from '../model/types/BoardType';

export const getPiece = (icons: PieceIconsType, elem: number) => {
  let postfix = '';
  let figure = icons.rook;

  if (elem === 1 || elem === 8) {
    postfix = 'rook';
    figure = icons.rook;
  } else if (elem === 2 || elem === 7) {
    postfix = 'knight';
    figure = icons.knight;
  } else if (elem === 3 || elem === 6) {
    postfix = 'bishop';
    figure = icons.bishop;
  } else if (elem === 4) {
    postfix = 'queen';
    figure = icons.queen;
  } else if (elem === 5) {
    postfix = 'king';
    figure = icons.king;
  }

  return { postfix, figure };
};

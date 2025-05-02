import { MouseEvent } from 'react';

import { PieceNameType } from '@/shared/ui/Piece';

import { BoardCoordsType } from '../model/types/BoardType';

interface BoardClickProps {
  coords: BoardCoordsType;
  pieceName: PieceNameType;
}

export const useBoardClick =
  ({ coords, pieceName }: BoardClickProps) =>
  (e: MouseEvent<HTMLDivElement>) => {
    const { x: srcX, y: srcY } = coords;
    if (srcX === 0 && srcY === 0) return;

    const { x: dstX, y: dstY } = e.nativeEvent;

    const signX = Math.sign(dstX - srcX);
    const signY = Math.sign(dstY - srcY);

    let cx = srcX + signX;
    let cy = srcY + signY;

    while (cx !== dstX || cy !== dstY) {
      const elem = document.elementFromPoint(cx, cy);
      console.log(elem);
      console.log('---------------------------------');

      if (cx !== dstX) cx += signX;
      if (cy !== dstY) cy += signY;
    }
  };

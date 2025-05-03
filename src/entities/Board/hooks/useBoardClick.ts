import { MouseEvent, Dispatch, SetStateAction, RefObject } from 'react';

import { PieceNameType } from '@/shared/ui/Piece';

import { BoardCoordsType, PiecePositionType } from '../model/types/BoardType';

interface BoardClickProps {
  boardRef: RefObject<HTMLDivElement | null>;

  coords: BoardCoordsType;
  pieceName: PieceNameType;
  position: PiecePositionType;

  setCoords: Dispatch<SetStateAction<BoardCoordsType>>;
  setPieceName: Dispatch<SetStateAction<PieceNameType>>;
  setPosition: Dispatch<SetStateAction<PiecePositionType>>;
}

export const useBoardClick =
  ({ boardRef, coords, pieceName, position, setCoords, setPieceName }: BoardClickProps) =>
  (e: MouseEvent<HTMLDivElement>) => {
    const { x: srcX, y: srcY } = coords;
    if (srcX === 0 && srcY === 0) return;

    const { x: dstX, y: dstY } = e.nativeEvent;

    const signX = Math.sign(dstX - srcX);
    const signY = Math.sign(dstY - srcY);

    let cx = srcX + signX;
    let cy = srcY + signY;

    let pieceNameOnWay = '';

    while (cx !== dstX || cy !== dstY) {
      const elem = document.elementFromPoint(cx, cy);
      const buttonElemId = elem?.closest('button')?.dataset.id;

      if (buttonElemId && buttonElemId !== pieceName) {
        pieceNameOnWay = buttonElemId as PieceNameType;

        break;
      }

      if (cx !== dstX) cx += signX;
      if (cy !== dstY) cy += signY;
    }

    console.log(position);

    const { top = 0, left = 0 } = boardRef.current?.getBoundingClientRect() ?? {};
    console.log(dstY - top, dstX - left);

    setCoords({ x: 0, y: 0 });
    setPieceName('');

    console.log(pieceNameOnWay);
  };

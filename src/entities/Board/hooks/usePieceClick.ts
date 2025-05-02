import { Dispatch, MouseEvent, SetStateAction } from 'react';

import { PieceNameType } from '@/shared/ui/Piece';

import { BoardCoordsType } from '../model/types/BoardType';

interface PieceClickProps {
  setCoords: Dispatch<SetStateAction<BoardCoordsType>>;
  setPieceName: Dispatch<SetStateAction<PieceNameType>>;
}

export const usePieceClick =
  ({ setCoords, setPieceName }: PieceClickProps) =>
  (e: MouseEvent<HTMLButtonElement>) => {
    const pieceName = e.currentTarget.dataset.id as PieceNameType;

    setCoords({ x: e.clientX, y: e.clientY });
    setPieceName(pieceName);
  };

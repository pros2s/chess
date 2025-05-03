import { Dispatch, MouseEvent, SetStateAction } from 'react';

import { PieceNameType } from '@/shared/ui/Piece';

import { BoardCoordsType, PiecePositionType } from '../model/types/BoardType';

interface PieceClickProps {
  setCoords: Dispatch<SetStateAction<BoardCoordsType>>;
  setPieceName: Dispatch<SetStateAction<PieceNameType>>;
  setPosition: Dispatch<SetStateAction<PiecePositionType>>;
}

export const usePieceClick =
  ({ setCoords, setPieceName, setPosition }: PieceClickProps) =>
  (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const pieceName = button.dataset.id as PieceNameType;

    const { top, left } = button.style;
    setPosition({ top: parseFloat(top), left: parseFloat(left) });

    setCoords({ x: e.clientX, y: e.clientY });
    setPieceName(pieceName);
  };

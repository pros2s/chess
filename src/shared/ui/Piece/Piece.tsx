import { memo, MouseEvent } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import { AppImage } from '../AppImage';
import { Button } from '../Button/Button';

import cls from './Piece.module.css';

export type PieceNameType =
  | ''
  | 'black-rook'
  | 'black-knight'
  | 'black-bishop'
  | 'black-queen'
  | 'black-king'
  | 'black-pawn'
  | 'white-rook'
  | 'white-knight'
  | 'white-bishop'
  | 'white-queen'
  | 'white-king'
  | 'white-pawn';

interface PieceProps {
  icon: string;
  top: number;
  left: number;
  dataId: PieceNameType;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export const Piece = memo(({ className, icon, left, top, dataId, onClick }: PieceProps) => (
  <Button
    data-id={dataId}
    style={{ top, left }}
    className={classNames(cls.piece, [className])}
    onClick={onClick}
  >
    <AppImage src={icon} alt='piece' />
  </Button>
));

Piece.displayName = 'Piece';

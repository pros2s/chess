import { memo } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';

import { AppImage } from '../AppImage';
import { FlexBox } from '../FlexBox';

import cls from './Piece.module.css';

interface PieceProps {
  icon: string;
  className?: string;
}

export const Piece = memo(({ className, icon }: PieceProps) => (
  <FlexBox className={classNames(cls.piece, [className])}>
    <AppImage src={icon} alt='piece' />
  </FlexBox>
));

Piece.displayName = 'Piece';

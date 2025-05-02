import boardIcon from '@/shared/assets/boards/lichess.png';
import { classNames } from '@/shared/lib/helpers/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Piece } from '@/shared/ui/Piece';

import { piecesIcons } from '../config/piecesIcons';
import { BoardPiecesThemeType, BoardTheme } from '../model/types/BoardType';

import cls from './Board.module.css';

interface BoardProps {
  piecesTheme?: BoardPiecesThemeType;
  isFlipped?: boolean;
  theme?: BoardTheme;
  className?: string;
}

export const Board = ({
  className,
  theme = 'classic',
  isFlipped = false,
  piecesTheme = 'lichess',
}: BoardProps) => {
  const icons = piecesIcons[piecesTheme];

  return (
    <FlexBox className={classNames(cls.board, [className])}>
      <AppImage src={boardIcon} alt='board' />

      <Piece icon={icons.rook[0]} />
    </FlexBox>
  );
};

Board.displayName = 'Board';

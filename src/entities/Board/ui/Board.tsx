import { FlexBox } from '@/shared/ui/FlexBox';

import { piecesIcons } from '../config/piecesIcons';
import { BoardPiecesThemeType, BoardTheme } from '../model/types/BoardType';

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

  return <FlexBox className={className}>board</FlexBox>;
};

Board.displayName = 'Board';

import { FlexBox } from '@/shared/ui/FlexBox';
import { Square, SquareLetterType, SquareNumberType } from '@/shared/ui/square';
import { SquareNotationH, SquareNotationV } from '@/shared/ui/square/SquareType';

import { piecesIcons } from '../config/piecesIcons';
import { themesCfg } from '../config/themes';
import { getIsPrimary } from '../helpers/getIsPrimary';
import { getSquarePosition } from '../helpers/getSquarePosition';
import { getStartPosition } from '../helpers/getStartPosition';
import { BoardPiecesThemeType, BoardTheme } from '../model/types/BoardType';

interface BoardProps {
  piecesTheme?: BoardPiecesThemeType;
  notationV?: SquareNotationV;
  notationH?: SquareNotationH;
  isFlipped?: boolean;
  theme?: BoardTheme;
  size?: number | string;
  className?: string;
}

const letters: SquareLetterType[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const numbers: SquareNumberType[] = [8, 7, 6, 5, 4, 3, 2, 1];

export const Board = ({
  className,
  size = '100%',
  theme = 'classic',
  isFlipped = false,
  notationH,
  notationV,
  piecesTheme = 'lichess',
}: BoardProps) => {
  const [primary, secondary] = themesCfg[theme];
  const icons = piecesIcons[piecesTheme];

  const nums = isFlipped ? numbers.slice().reverse() : numbers;
  const lets = isFlipped ? letters.slice().reverse() : letters;

  return (
    // cols
    <FlexBox style={{ height: size, width: size }} className={className} direction='column'>
      {nums.map((number, i) => (
        // rows
        <FlexBox className='w-100 h-100'>
          {lets.map((letter, ind) => {
            const bgPrimary = getIsPrimary(i, ind) ? primary : secondary;
            const bgSecondary = getIsPrimary(i, ind) ? secondary : primary;

            const position = getSquarePosition(i, ind);
            const piece = getStartPosition(number, letter);

            return (
              <Square
                key={`${letter}${number}`}
                letter={letter}
                number={number}
                bgPrimary={bgPrimary}
                bgSecondary={bgSecondary}
                position={position}
                notationH={notationH}
                notationV={notationV}
                isFullNotation={false}
                icons={icons}
                piece={piece}
              />
            );
          })}
        </FlexBox>
      ))}
    </FlexBox>
  );
};

Board.displayName = 'Board';

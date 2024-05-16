import { classNames } from '@/shared/lib/helpers/classNames';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Square, SquareLetterType, SquareNumberType } from '@/shared/ui/square';

import { themes } from '../config/themes';
import { getIsPrimary } from '../helpers/getIsPrimary';
import { getSquarePosition } from '../helpers/getSquarePosition';
import { BoardTheme } from '../model/types/BoardType';

import cls from './Board.module.css';

interface BoardProps {
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
}: BoardProps) => {
  const [primary, secondary] = themes[theme];

  const nums = isFlipped ? numbers.reverse() : numbers;
  const lets = isFlipped ? letters.reverse() : letters;

  return (
    // cols
    <FlexBox
      style={{ height: size, width: size }}
      className={classNames(cls.board, [className])}
      direction='column'
    >
      {nums.map((number, i) => (
        // rows
        <FlexBox className='w-100 h-100'>
          {lets.map((letter, ind) => {
            const bgPrimary = getIsPrimary(i, ind) ? primary : secondary;
            const bgSecondary = getIsPrimary(i, ind) ? secondary : primary;

            const position = getSquarePosition(i, ind);

            return (
              <Square
                key={`${letter}${number}`}
                letter={letter}
                number={number}
                bgPrimary={bgPrimary}
                bgSecondary={bgSecondary}
                position={position}
                positionHType='bottom'
                positionVType='right'
                isFullNotation={false}
              />
            );
          })}
        </FlexBox>
      ))}
    </FlexBox>
  );
};

Board.displayName = 'Board';

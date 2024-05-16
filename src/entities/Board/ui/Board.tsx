import { classNames } from '@/shared/lib/helpers/classNames';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Square, SquareLetterType, SquareNumberType } from '@/shared/ui/square';

import { themes } from '../config/themes';
import { getIsPrimary } from '../helpers/getIsPrimary';
import { getSquarePosition } from '../helpers/getSquarePosition';
import { BoardTheme } from '../model/types/BoardType';

import cls from './Board.module.css';

interface BoardProps {
  theme?: BoardTheme;
  size?: number | string;
  className?: string;
}

const letters: SquareLetterType[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const numbers: SquareNumberType[] = [8, 7, 6, 5, 4, 3, 2, 1];

export const Board = ({ className, size = '100%', theme = 'classic' }: BoardProps) => {
  const [primary, secondary] = themes[theme];

  return (
    // cols
    <FlexBox
      style={{ height: size, width: size }}
      className={classNames(cls.board, [className])}
      direction='column'
    >
      {numbers.map((number) => (
        // rows
        <FlexBox className='w-100 h-100'>
          {letters.map((letter, i) => {
            const bgColor = getIsPrimary(number, i) ? primary : secondary;
            const position = getSquarePosition(number, i);

            return (
              <Square
                key={`${letter}${number}`}
                letter={letter}
                number={number}
                bgColor={bgColor}
                position={position}
                positionHType='bottom'
                positionVType='left'
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

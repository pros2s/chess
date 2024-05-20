import { useState } from 'preact/hooks';

import { Board } from '@/entities/Board';
import { FlipBoard } from '@/features/FlipBoard';
import { SwapNotation } from '@/features/SwapNotation';
import { classNames } from '@/shared/lib/helpers/classNames';
import { FlexBox } from '@/shared/ui/FlexBox';
import { SquareNotationH, SquareNotationV } from '@/shared/ui/square/SquareType';

import cls from './PlayGround.module.css';

interface PlayGroundProps {
  className?: string;
}

export const PlayGround = ({ className }: PlayGroundProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const [swappedH, setSwappedH] = useState<SquareNotationH>('left');
  const handleSwapH = () => {
    setSwappedH((prev) => (prev === 'left' ? 'right' : 'left'));
  };

  const [swappedV, setSwappedV] = useState<SquareNotationV>('bottom');
  const handleSwapV = () => {
    setSwappedV((prev) => (prev === 'bottom' ? 'top' : 'bottom'));
  };

  return (
    <FlexBox
      style={{ width: 700 }}
      className={classNames(cls.playground, [className])}
      direction='column'
      gap={20}
    >
      <FlexBox className='w-100' align='center' justify='end' gap={20}>
        <FlipBoard onFlip={handleFlip} />
        <SwapNotation onSwapH={handleSwapH} />
        <SwapNotation onSwapV={handleSwapV} />
      </FlexBox>

      <Board
        className={cls.board}
        size={700}
        isFlipped={isFlipped}
        notationH={swappedH}
        notationV={swappedV}
      />
    </FlexBox>
  );
};

PlayGround.displayName = 'PlayGround';

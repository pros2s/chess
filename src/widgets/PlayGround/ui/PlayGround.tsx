import { useState } from 'react';

import { Board } from '@/entities/Board';
import { FlipBoard } from '@/features/FlipBoard';
import { SwapNotation } from '@/features/SwapNotation';
import { classNames } from '@/shared/lib/helpers/classNames';
import { FlexBox } from '@/shared/ui/FlexBox';

import cls from './PlayGround.module.css';

interface PlayGroundProps {
  className?: string;
}

export const PlayGround = ({ className }: PlayGroundProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleSwapH = () => {};
  const handleSwapV = () => {};

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

      <Board className={cls.board} isFlipped={isFlipped} />
    </FlexBox>
  );
};

PlayGround.displayName = 'PlayGround';

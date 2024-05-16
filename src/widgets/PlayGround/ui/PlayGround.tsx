import { useState } from 'preact/hooks';

import { Board } from '@/entities/Board';
import { FlipBoard } from '@/features/FlipBoard';
import { classNames } from '@/shared/lib/helpers/classNames';
import { FlexBox } from '@/shared/ui/FlexBox';

import cls from './PlayGround.module.css';

interface PlayGroundProps {
  className?: string;
}

export const PlayGround = ({ className }: PlayGroundProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (isFlip: boolean) => {
    setIsFlipped(isFlip);
  };

  return (
    <FlexBox
      style={{ width: 700 }}
      className={classNames(cls.playground, [className])}
      direction='column'
      gap={20}
    >
      <FlexBox align='center'>
        <FlipBoard onFlip={handleFlip} />
      </FlexBox>

      <Board size={700} isFlipped={isFlipped} />
    </FlexBox>
  );
};

PlayGround.displayName = 'PlayGround';

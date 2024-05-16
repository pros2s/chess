import { useState } from 'preact/hooks';
import { FaRotate } from 'react-icons/fa6';

import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './FlipBoard.module.css';

interface FlipBoardProps {
  onFlip: () => void;
  className?: string;
}

export const FlipBoard = ({ className, onFlip }: FlipBoardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
    onFlip();
  };

  return (
    <button
      className={classNames(cls.flip, [className], { [cls.flipped]: isFlipped })}
      type='button'
      label='flip-board'
      onClick={handleFlip}
    >
      <FaRotate size={20} />
    </button>
  );
};

FlipBoard.displayName = 'FlipBoard';

import { useState } from 'preact/hooks';
import { MdOutlineFlipCameraAndroid } from 'react-icons/md';

import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './FlipBoard.module.css';

interface FlipBoardProps {
  onFlip: (isFlipped: boolean) => void;
  className?: string;
}

export const FlipBoard = ({ className, onFlip }: FlipBoardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
    onFlip(isFlipped);
  };

  return (
    <button
      className={classNames(cls.flip, [className], { [cls.flipped]: isFlipped })}
      type='button'
      label='flip-board'
      onClick={handleFlip}
    >
      <MdOutlineFlipCameraAndroid size={20} />
    </button>
  );
};

FlipBoard.displayName = 'FlipBoard';

import { useState } from 'preact/hooks';
import { IoMdSwap } from 'react-icons/io';

import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './SwapNotation.module.css';

interface SwapNotationProps {
  onSwapV?: () => void;
  onSwapH?: () => void;
  className?: string;
}

export const SwapNotation = ({ className, onSwapH, onSwapV }: SwapNotationProps) => {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleSwap = () => {
    onSwapV?.();
    onSwapH?.();

    setIsSwapped((prev) => !prev);
  };

  return (
    <button
      className={classNames(cls.swap, [className], {
        [cls.swapped]: isSwapped,
        [cls.vertical]: !!onSwapV,
      })}
      type='button'
      label='swap-notation'
      onClick={handleSwap}
    >
      <IoMdSwap size={20} />
    </button>
  );
};

SwapNotation.displayName = 'SwapNotation';

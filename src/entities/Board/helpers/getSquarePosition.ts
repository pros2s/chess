import { SquarePositionType } from '@/shared/ui/square';

export const getSquarePosition = (numberI: number, letterI: number): SquarePositionType => {
  if (numberI === 0 && letterI === 0) return 'top-left';
  if (numberI === 0 && letterI === 7) return 'top-right';

  if (numberI === 7 && letterI === 0) return 'bottom-left';
  if (numberI === 7 && letterI === 7) return 'bottom-right';

  if (numberI === 0) return 'top';
  if (numberI === 7) return 'bottom';

  if (letterI === 7) return 'right';
  if (letterI === 0) return 'left';

  return 'other';
};

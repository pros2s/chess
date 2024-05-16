import { SquarePositionType } from '@/shared/ui/square';

export const getSquarePosition = (number: number, letterI: number): SquarePositionType => {
  if (number === 8 && letterI === 0) return 'top-left';
  if (number === 8 && letterI === 7) return 'top-right';

  if (number === 1 && letterI === 0) return 'bottom-left';
  if (number === 1 && letterI === 7) return 'bottom-right';

  if (number === 8) return 'top';
  if (number === 1) return 'bottom';

  if (letterI === 7) return 'right';
  if (letterI === 0) return 'left';

  return 'other';
};

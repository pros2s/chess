import { MouseEvent } from 'react';

import { PieceDataIdType } from '@/shared/ui/Piece';

export const usePieceClick = () => (e: MouseEvent<HTMLButtonElement>) => {
  const targetDataId = e.currentTarget.dataset.id as PieceDataIdType;

  console.log(e.clientX, e.clientY);
  console.log(targetDataId);
};

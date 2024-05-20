import bishopB from '@/shared/assets/pieces/lichess/black/bishop.svg';
import kingB from '@/shared/assets/pieces/lichess/black/king.svg';
import knightB from '@/shared/assets/pieces/lichess/black/knight.svg';
import pawnB from '@/shared/assets/pieces/lichess/black/pawn.svg';
import queenB from '@/shared/assets/pieces/lichess/black/queen.svg';
import rookB from '@/shared/assets/pieces/lichess/black/rook.svg';
import bishopW from '@/shared/assets/pieces/lichess/white/bishop.svg';
import kingW from '@/shared/assets/pieces/lichess/white/king.svg';
import knightW from '@/shared/assets/pieces/lichess/white/knight.svg';
import pawnW from '@/shared/assets/pieces/lichess/white/pawn.svg';
import queenW from '@/shared/assets/pieces/lichess/white/queen.svg';
import rookW from '@/shared/assets/pieces/lichess/white/rook.svg';
import { SquarePieceIconsType } from '@/shared/ui/square';

import { BoardPiecesThemeType } from '../model/types/BoardType';

export const piecesIcons: Record<BoardPiecesThemeType, SquarePieceIconsType> = {
  lichess: {
    bishop: [bishopW, bishopB],
    knight: [knightW, knightB],
    pawn: [pawnW, pawnB],
    king: [kingW, kingB],
    queen: [queenW, queenB],
    rook: [rookW, rookB],
  },
};

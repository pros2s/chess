import boardIcon from '@/shared/assets/boards/lichess.png';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getTestArray } from '@/shared/lib/helpers/getTestArray';
import { AppImage } from '@/shared/ui/AppImage';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Piece, PieceDataIdType } from '@/shared/ui/Piece';

import { piecesIcons } from '../config/piecesIcons';
import { getPiece } from '../helpers/getPiece';
import { usePieceClick } from '../hooks/usePieceClick';
import { BoardPiecesThemeType } from '../model/types/BoardType';

import cls from './Board.module.css';

interface BoardProps {
  piecesTheme?: BoardPiecesThemeType;
  className?: string;
}

const boardSize = 700;
const pieceSize = boardSize / 8;

export const Board = ({ className, piecesTheme = 'lichess' }: BoardProps) => {
  const icons = piecesIcons[piecesTheme];

  const handlePiece = usePieceClick();

  return (
    <FlexBox
      style={{ width: boardSize, height: boardSize }}
      className={classNames(cls.board, [className])}
    >
      <AppImage src={boardIcon} alt='board' />

      {/* black pieces */}
      {getTestArray(8).map((elem) => {
        const { figure, postfix } = getPiece(icons, elem);

        const dataId = `black-${postfix}` as PieceDataIdType;

        return (
          <Piece
            dataId={dataId}
            key={elem}
            icon={figure[1]}
            left={pieceSize * (elem - 1)}
            top={0}
            onClick={handlePiece}
          />
        );
      })}
      {/* // -------------------------------------------------------------- */}

      {/* black pawns */}
      {getTestArray(8).map((elem) => (
        <Piece
          dataId='black-pawn'
          key={elem}
          icon={icons.pawn[1]}
          left={pieceSize * (elem - 1)}
          top={pieceSize}
          onClick={handlePiece}
        />
      ))}
      {/* // -------------------------------------------------------------- */}

      {/* white pawns */}
      {getTestArray(8).map((elem) => (
        <Piece
          dataId='white-pawn'
          key={elem}
          icon={icons.pawn[0]}
          left={pieceSize * (elem - 1)}
          top={pieceSize * 6}
          onClick={handlePiece}
        />
      ))}
      {/* // -------------------------------------------------------------- */}

      {/* white pieces */}
      {getTestArray(8).map((elem) => {
        const { figure, postfix } = getPiece(icons, elem);

        const dataId = `white-${postfix}` as PieceDataIdType;

        return (
          <Piece
            dataId={dataId}
            key={elem}
            icon={figure[0]}
            left={pieceSize * (elem - 1)}
            top={pieceSize * 7}
            onClick={handlePiece}
          />
        );
      })}
      {/* // -------------------------------------------------------------- */}
    </FlexBox>
  );
};

Board.displayName = 'Board';

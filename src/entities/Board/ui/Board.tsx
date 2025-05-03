import { useRef, useState } from 'react';

import boardIcon from '@/shared/assets/boards/lichess.png';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getTestArray } from '@/shared/lib/helpers/getTestArray';
import { AppImage } from '@/shared/ui/AppImage';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Piece, PieceNameType } from '@/shared/ui/Piece';

import { piecesIcons } from '../config/piecesIcons';
import { BOARD_SIZE, PIECE_SIZE } from '../consts/board';
import { getPiece } from '../helpers/getPiece';
import { useBoardClick } from '../hooks/useBoardClick';
import { usePieceClick } from '../hooks/usePieceClick';
import { BoardCoordsType, BoardPiecesThemeType, PiecePositionType } from '../model/types/BoardType';

import cls from './Board.module.css';

interface BoardProps {
  piecesTheme?: BoardPiecesThemeType;
  className?: string;
}

export const Board = ({ className, piecesTheme = 'lichess' }: BoardProps) => {
  const icons = piecesIcons[piecesTheme];

  const boardRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<BoardCoordsType>({ x: 0, y: 0 });
  const [pieceName, setPieceName] = useState<PieceNameType>('');
  const [position, setPosition] = useState<PiecePositionType>({ top: 0, left: 0 });

  const handlePiece = usePieceClick({ setCoords, setPieceName, setPosition });
  const handleBoard = useBoardClick({
    boardRef,
    coords,
    pieceName,
    position,
    setCoords,
    setPieceName,
    setPosition,
  });

  return (
    <FlexBox
      ref={boardRef}
      style={{ width: BOARD_SIZE, height: BOARD_SIZE }}
      className={classNames(cls.board, [className])}
      onClick={handleBoard}
    >
      <AppImage src={boardIcon} alt='board' />

      {/* black pieces */}
      {getTestArray(8).map((elem) => {
        const { figure, postfix } = getPiece(icons, elem);

        const dataId = `black-${postfix}` as PieceNameType;

        return (
          <Piece
            dataId={dataId}
            key={elem}
            icon={figure[1]}
            left={PIECE_SIZE * (elem - 1)}
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
          left={PIECE_SIZE * (elem - 1)}
          top={PIECE_SIZE}
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
          left={PIECE_SIZE * (elem - 1)}
          top={PIECE_SIZE * 6}
          onClick={handlePiece}
        />
      ))}
      {/* // -------------------------------------------------------------- */}

      {/* white pieces */}
      {getTestArray(8).map((elem) => {
        const { figure, postfix } = getPiece(icons, elem);

        const dataId = `white-${postfix}` as PieceNameType;

        return (
          <Piece
            dataId={dataId}
            key={elem}
            icon={figure[0]}
            left={PIECE_SIZE * (elem - 1)}
            top={PIECE_SIZE * 7}
            onClick={handlePiece}
          />
        );
      })}
      {/* // -------------------------------------------------------------- */}
    </FlexBox>
  );
};

Board.displayName = 'Board';

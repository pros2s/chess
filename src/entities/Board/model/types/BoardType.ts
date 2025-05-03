export type BoardTheme = 'classic';
export type BoardPiecesThemeType = 'lichess';

export type PiecesType = 'bishop' | 'knight' | 'pawn' | 'king' | 'queen' | 'rook';
export type PieceIconsType = Record<PiecesType, [string, string]>;

export type PiecePositionType = {
  top: number;
  left: number;
};

export type BoardCoordsType = {
  x: number;
  y: number;
};

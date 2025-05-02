export type BoardTheme = 'classic';
export type BoardPiecesThemeType = 'lichess';

export type PiecesType = 'bishop' | 'knight' | 'pawn' | 'king' | 'queen' | 'rook';
export type PieceIconsType = Record<PiecesType, [string, string]>;

export type BoardCoordsType = {
  x: number;
  y: number;
};

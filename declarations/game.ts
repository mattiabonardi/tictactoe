export type Game = {
  start: Date;
  end: Date;
  steps: Step[];
  winner: Gamer;
};

export type GameTrack = {
  ip: string;
  address: Address;
  start: Date;
  end: Date;
  board: Board;
  winner: Gamer;
};

export type Step = {
  gamer: Gamer;
  position: Position;
};

export type Address = {
  country: string;
  region: string;
  timezone: string;
  city: string;
};

export type Gamer = "USER" | "CPU" | "DRAW" | undefined;

export type Position = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type InsertDto = {
  board: Board;
  start: Date;
  winner: Gamer;
};

export type Move = {
  row: number;
  col: number;
};

export type Board = BoardCellValue[][];

export type BoardCellValue = "x" | "o" | "_";

export type GraphicBoard = {
  [index: string]: {
    color: string;
    value: BoardCellValue;
  };
};

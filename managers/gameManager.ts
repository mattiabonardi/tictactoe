import { Board, Game, GraphicBoard, Move } from "../declarations/game";
import axios from "axios";

/**
 * Check game status
 * -1 = "not finished"
 *  0 = "X wins"
 *  1 = "O wins"
 *  2 = "draw"
 * @param board
 * @returns
 */
export async function calculateCpuMove(board: Board) {
  const response = await axios.post("/api/calculate", {
    board: board,
  });
  return response.data;
}

/**
 * Reset game
 * @param game
 */
export function resetGame(game: Game) {
  game = {
    start: new Date(),
    end: new Date(),
    steps: [],
    winner: undefined,
  };
}

/**
 * Iniial board
 * @returns
 */
export function createEmptyBoard(): Board {
  return [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];
}

/**
 * Initial graphic board
 * @returns
 */
export function createInitialGraphicBoard(): GraphicBoard {
  return {
    "0.0": {
      color: "#BABABA",
      value: "_",
    },
    "0.1": {
      color: "#BABABA",
      value: "_",
    },
    "0.2": {
      color: "#BABABA",
      value: "_",
    },
    "1.0": {
      color: "#BABABA",
      value: "_",
    },
    "1.1": {
      color: "#BABABA",
      value: "_",
    },
    "1.2": {
      color: "#BABABA",
      value: "_",
    },
    "2.0": {
      color: "#BABABA",
      value: "_",
    },
    "2.1": {
      color: "#BABABA",
      value: "_",
    },
    "2.2": {
      color: "#BABABA",
      value: "_",
    },
  };
}

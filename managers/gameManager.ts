import { Board, Game, Move } from "../declarations/game";

/**
 * Check game status
 * -1 = "not finished"
 *  0 = "X wins"
 *  1 = "O wins"
 *  2 = "draw"
 * @param board
 * @returns
 */
export async function checkGame(board: Board) {
  const response = await axios.post("/api/check", {
    board: board,
  });
  return response.data.status;
}

/**
 * Check game status
 * -1 = "not finished"
 *  0 = "X wins"
 *  1 = "O wins"
 *  2 = "draw"
 * @param board
 * @returns
 */
export async function calculateCpuMove(board: Board): Move {
  const response = await axios.post("/api/calculate", {
    board: board,
  });
  return response.data.move;
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

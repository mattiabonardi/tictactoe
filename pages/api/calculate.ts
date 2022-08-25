import type { NextApiRequest, NextApiResponse } from "next";
import { Board, Move } from "../../declarations/game";
import { tictactoe } from "../../ia/tictactoe";

/**
 * Endpoint: /calculate
 * Method: POST
 * Body (json)
 *  - board: Board
 * @param req
 * @param res
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    status: number;
    move: Move;
  }>
) {
  const board: Board = req.body.board;
  const { move, status } = tictactoe(board);
  console.log("STATUS->", status);
  res.status(200).json({
    status: status,
    move: move,
  });
}

import type { NextApiRequest, NextApiResponse } from "next";
import { Board } from "../../declarations/game";
import { getGameStatus } from "../../ia/tictactoe";

/**
 * Endpoint: /check
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
  }>
) {
  const board: Board = req.body.board;
  const status: number = getGameStatus(board);
  res.status(200).json({
    status: status,
  });
}

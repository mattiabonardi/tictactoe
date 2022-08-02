import type { NextApiRequest, NextApiResponse } from "next";

/**
 * 1 | 2 | 3
 * --+---+--
 * 4 | 5 | 6
 * --+---+--
 * 7 | 8 | 9
 */

/**
 * Endpoint: /calculate
 * Method: POST
 * Body (json)
 *  - gameStatus: number[]
 *  - newPosition: number
 * @param req
 * @param res
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const gameStatus: number[] = req.body.gameStatus;
  const newPosition: number = req.body.position;
  res.status(200).json({ name: "John Doe" });
}

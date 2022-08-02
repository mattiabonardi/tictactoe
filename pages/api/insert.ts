import type { NextApiRequest, NextApiResponse } from "next";
import geoip from "geoip-lite";
import type { Address, Game, InsertDto } from "../../declarations/game";
import { connectToDatabase } from "../../utility/mongodb";

/**
 * Endpoint: /calculate
 * Method: POST
 * Body (json)
 *  InsertDto
 * @param req
 * @param res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const inserDto: InsertDto = req.body;
  // find ip
  const ip = req.socket.remoteAddress as string;
  // lookup ip
  const geo = geoip.lookup(ip) as geoip.Lookup;
  let address: Address = {
    country: "",
    region: "",
    timezone: "",
    city: "",
  };
  if (geo) {
    address.city = geo.city;
    address.country = geo.country;
    address.region = geo.region;
    address.timezone = geo.timezone;
  }
  // create game
  const game: Game = {
    ...inserDto,
    end: new Date(),
    ip: ip,
    address: address,
  };
  // insert to Mongo
  const db = await connectToDatabase();
  db.collection("games").insertOne(game, function (mongoErr, mongoRes) {
    if (mongoErr) {
      res.status(500).json({ err: mongoErr.message });
    } else {
      res.status(200).json({ status: "ok" });
    }
  });
}

import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const db = process.env.MONGODB_DB as string;
const client = new MongoClient(uri);

export async function connectToDatabase(): Promise<Db> {
  await client.connect();
  return client.db(db);
}

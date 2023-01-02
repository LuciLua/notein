import { MongoClient, Db } from "mongodb";
import url from "url";

let cacheDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cacheDb) {
    return cacheDb;
  }

  const client = await MongoClient.connect(uri, {});
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // );

  const dbName = url.parse(uri).pathname.substring(1);
  // substring pula 1 caractere e pega o q vem depois
  const db = client.db(dbName);
  cacheDb = db;

  return db;
}

export default connectToDatabase
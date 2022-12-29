import { MongoClient, Db } from "mongodb";
import url from "url";

let cacheDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cacheDb) {
    return cacheDb;
  }

  const client = await MongoClient.connect(uri,{}) 

    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  // );

  const dbName = url.parse(uri).pathname.substring(1);
  // substring pula 1 caractere e pega o q vem depois
  const db = client.db(dbName);

  cacheDb = db;

  return db;
}

export default async (request, response) => {
  const { username, pass, email } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("users");

  await collection.insertOne({
    username,
    pass,
    email,
  });

  return response.status(201).json({ ok: true });
};

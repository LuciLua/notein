import connectToDatabase from "../connectToDatabase";

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

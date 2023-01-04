import connectToDatabase from "../connectToDatabase";
const bcrypt = require("bcrypt");

export default async (request, response) => {
  const data = request.body;
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("users");

  const passPlain = data.pass;

  const validPass = await bcrypt.hash(passPlain, 8);

  // Store hash in your password DB.
  await collection.insertOne({
    username: data.username,
    email: data.email,
    pass: validPass,
  });

  return response.status(201).json({ ok: true });
};

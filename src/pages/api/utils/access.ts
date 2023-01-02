import connectToDatabase from "../connectToDatabase";

export default async (request, response) => {
  const { data } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("users");

  const users = await collection.findOne({
    email: data.email,
    pass: data.pass,
  });

  if (users != null) {
    response.json("AccountExists")
  } else {
    response.json("noOne")
  }
};

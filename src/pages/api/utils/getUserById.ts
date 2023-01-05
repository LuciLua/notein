// import { useContext } from 'react';
import connectToDatabase from "../connectToDatabase";
import loginService from "../../../services/auth.service";
import { ObjectId } from "mongodb";

export default async (request, response) => {
  const { id } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("users");

  try {

    // Store hash in your password DB.
    const users = await collection.findOne({
      _id: id,
    });

    console.log(id)

    if (users != null) {
        response.json(users);
    } else {
      response.json("noOne");
    }

  } catch (err) {
    response.status(500).send(err.message);
  }
};

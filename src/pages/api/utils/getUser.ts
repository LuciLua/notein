// import { useContext } from 'react';
import connectToDatabase from "../connectToDatabase";
import loginService from "../../../services/auth.service";
// import { UserContext } from '../../../contexts/UserContext';
const bcrypt = require("bcrypt");

export default async (request, response) => {
  const { data } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("users");

  // const [dataForContext, setDataForContext] = useContext(UserContext)

  try {
    const userByEmail = await collection.findOne({
      email: data.email,
    });
    const passwordIsValid = await bcrypt.compare(data.pass, userByEmail.pass);

    var cryptoPass = "";

    if (passwordIsValid) cryptoPass = userByEmail.pass;

    // Store hash in your password DB.
    const users = await collection.findOne({
      email: data.email,
      pass: cryptoPass,
    });

    if (users != null) {
      response.json(users);
    } else {
      response.json("noOne");
    }
  } catch (err) {
    response.status(500).send(err.message);
  }
};
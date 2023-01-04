import connectToDatabase from "../connectToDatabase";
import loginService from "../../../services/auth.service";
const bcrypt = require("bcrypt");

export default async (request, response) => {
  const { data } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("users");

  // const users = await collection.findOne({
  //   email: data.email,
  //   pass: data.pass,
  // });

  try {
    const userByEmail = await collection.findOne({
      email: data.email,
    });
    const passwordIsValid = await bcrypt.compare(data.pass, userByEmail.pass);

    var cryptoPass = "";

    if (passwordIsValid) cryptoPass = userByEmail.pass;

    console.log(cryptoPass);

    // Store hash in your password DB.
    const users = await collection.findOne({
      email: data.email,
      pass: cryptoPass,
    });

    if (users != null) {
      response.json("AccountExists");
    } else {
      response.json("noOne");
    }
  } catch (err) {
    response.status(500).send(err.message);
  }
};

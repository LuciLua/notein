import User from "../models/User";

const loginService = (email) => {
    User.findOne({ email: email })
}

export default loginService
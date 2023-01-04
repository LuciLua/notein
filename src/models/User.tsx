import mongoose from "mongoose"
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    pass: {
        type: String,
        select: false,
        required: true
    },
    passConfirm: {
        type: String,
        required: true
    }
})

UserSchema.pre("save", async function (next) {
    this.pass = await bcrypt.hash(this.pass, 10)
})

const User = mongoose.model("user", UserSchema)

export default User;
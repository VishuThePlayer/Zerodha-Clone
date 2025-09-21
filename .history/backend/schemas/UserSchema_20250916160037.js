import {Schema} from "mongoose";

const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    phone: Number,
    username: String,
})

module.exports = 
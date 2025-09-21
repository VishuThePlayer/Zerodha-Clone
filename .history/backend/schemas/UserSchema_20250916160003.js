import {Schema} from "mongoose";

const UserSchema = new Schema({
    email: Str,
    firstName,
    lastName,
    password,
    phone,
    username
})
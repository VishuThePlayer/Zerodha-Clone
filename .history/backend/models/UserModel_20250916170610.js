const { model } = require("mongoose");
const UserSchema = require("../schemas"); // require the schema

const User = model("User", UserSchema); // ✅ create the model

module.exports = User; // ✅ export the model

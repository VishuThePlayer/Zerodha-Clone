const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User"}, // <-- reference to User
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  firstName: { type: String, required: true, trim: true, minlength: 2 },
  lastName: { type: String, trim: true },
  password: { type: String, required: true, minlength: 6, select: true },
  phone: { type: String, match: [/^\+?\d{7,15}$/, "Invalid phone"] },
  username: { type: String, required: true, unique: true, trim: true, minlength: 4 },
}, { timestamps: true });

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


UserSchema.post("save", sync)

module.exports = UserSchema; // ✅ export directly

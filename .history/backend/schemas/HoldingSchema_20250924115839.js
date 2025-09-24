const { Schema } = require("mongoose");

const HoldingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // <-- reference to User
  name: { type: String, required: true },
  qnty: { type: Number, required: true },
  avg: { type: Number, required: true },
  price: { type: Number, required: true },
  net: { type: String },
  day: { type: String },
}, { timestamps: true });

module.exports = HoldingSchema;

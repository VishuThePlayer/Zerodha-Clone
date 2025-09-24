const { Schema } = require("mongoose");

const HoldingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // <-- reference to User
    name: String,
    qnty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = { HoldingSchema };

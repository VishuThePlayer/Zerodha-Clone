const mongoose = require("mongoose");
const {Schema} = require('mongoose');

const PositionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // <-- reference to User
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

module.exports = {PositionSchema};
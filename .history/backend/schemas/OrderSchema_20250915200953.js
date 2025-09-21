const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    mode: { type: String, enum: ["BUY", "SELL"], required: true } // optional validation
});

module.exports = { OrderSchema };

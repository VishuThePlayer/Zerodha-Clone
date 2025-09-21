const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    qnty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = { HoldingSchema };

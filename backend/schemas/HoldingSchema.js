const { Schema } = require("mongoose");

const HoldingSchema = new Schema({
    name: String,
    qnty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = { HoldingSchema };

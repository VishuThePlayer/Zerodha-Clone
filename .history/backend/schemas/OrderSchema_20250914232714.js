const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    qnty: Number,
    price: Number,
    mode: S
});

module.exports = { OrderSchema };

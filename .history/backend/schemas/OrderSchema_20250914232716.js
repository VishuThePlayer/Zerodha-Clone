const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    qnty: Number,
    price: Number,
    mode: String,
});

module.exports = { OrderSchema };

const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    qnty: Number,
    avg: Number,
    price: Number,
});

module.exports = { OrderSchema };

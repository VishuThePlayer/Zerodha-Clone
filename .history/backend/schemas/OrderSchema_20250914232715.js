const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    qnty: Number,
    price: Number,
    mode: String,m
});

module.exports = { OrderSchema };

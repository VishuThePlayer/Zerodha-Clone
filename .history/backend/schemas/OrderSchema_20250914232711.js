const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    qnty: Number,
    price: Number,
    mod
});

module.exports = { OrderSchema };

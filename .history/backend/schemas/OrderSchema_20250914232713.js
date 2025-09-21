const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    qnty: Number,
    price: Number,
    mode:  St
});

module.exports = { OrderSchema };

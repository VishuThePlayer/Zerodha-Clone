const mongoose = require("mongoose");
const {Schema} = require('mongoose');

const PositionSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: S,
    isLoss: Boolean,
});

module.exports = {PositionSchema};
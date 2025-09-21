const mongoose = require("mongoose");
const {Schema, Model} = require('mongoose');

const PositionSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: Number,
    day: Number,
    isLoss: Boolean,
});

module.export = {PositionSchema};
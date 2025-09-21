const mongoose = require("mongoose");
const {Schema, Model} = require('mongoose');

const HoldingSchema = new Schema({
    product: Str,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: Number,
    day: Number,
    isLoss: Boolean,
});

module.export = {HoldingSchema};
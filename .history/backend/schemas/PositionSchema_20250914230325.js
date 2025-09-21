const mongoose = require("mongoose");
const {Schema, Model} = require('mongoose');

const PositionSche = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: Number,
    day: Number,
    isLoss: Boolean,
});

module.export = {HoldingSchema};
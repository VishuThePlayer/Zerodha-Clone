const mongoose = require("mongoose");
const {Schema, Model} = require('mongoose');

const HoldingSchema = new Schema({
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 314.35,
    net: Number,
    day: Number,
    isLoss: Boolean,
});

module.export = {HoldingSchema};
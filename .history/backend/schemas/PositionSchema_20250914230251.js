const mongoose = require("mongoose");
const {Schema, Model} = require('mongoose');

const HoldingSchema = new Schema({
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: Num,
    price: Num,
    net: Number,
    day: Number,
    isLoss: Boolean,
});

module.export = {HoldingSchema};
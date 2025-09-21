const mongoose = require("mongoose");
const {Schema, ==} = require('mongoose');

const HoldingSchema = new Schema({
    name: String,
    qnty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.export = {HoldingSchema};
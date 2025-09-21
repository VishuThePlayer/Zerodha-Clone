const mongoose = require("mongoose");
const {Schema, Model} = require('mongoose');

const HoldingSchema = new Schema({
    name: String,
    qnty: Number,
    a
})

module.export = {HoldingSchema};
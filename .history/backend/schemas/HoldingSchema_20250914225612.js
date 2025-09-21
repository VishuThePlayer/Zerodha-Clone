const mongoose = require("mongoose");
const {Schema, Model} = require('mongoose');

const HoldingSchema = new Schema({
    name: String,
    qnty: Number,
    avg: Number,
    
})

module.export = {HoldingSchema};
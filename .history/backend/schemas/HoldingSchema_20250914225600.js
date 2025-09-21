const mongoose = require("mongoose");
const {Schema, Model} = require('mongoose');

const HoldingSchema = new Schema({
    name: String,
    qnty
})

module.export = {HoldingSchema};
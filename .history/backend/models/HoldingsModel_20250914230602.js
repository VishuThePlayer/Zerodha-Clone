const {model} = require("mongoose");
const {HoldingsSchema} = require("../schemas/HoldingSchema");


const HoldingSchema = new model("holding", HoldingsSchema);

module.exports = {HoldingSchema};
const {model} = require("mongoose");
const {HoldingsSchema} = require("../schemas/HoldingSchema");


const HoldingSchema = model("holding", HoldingsSchema);

module.exports = {HoldingSchema};
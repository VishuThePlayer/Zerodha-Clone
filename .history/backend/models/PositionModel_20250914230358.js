const {model} = require("mongoose");
const {HoldingsSchema} = require("../schemas/HoldingSchema");


const PositionSchema = new Model("holding", HoldingsSchema);

module.exports = {HoldingSchema};
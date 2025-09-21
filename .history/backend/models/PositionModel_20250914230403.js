const {model} = require("mongoose");
const {HoldingsSchema} = require("../schemas/HoldingsSchema");


const PositionSchema = new Model("holding", HoldingsSchema);

module.exports = {HoldingSchema};
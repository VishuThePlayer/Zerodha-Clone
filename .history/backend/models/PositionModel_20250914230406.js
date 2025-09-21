const {model} = require("mongoose");
const {HoldingsSchema} = require("../schemas/PositionSchema");


const PositionSchema = new Model("holding", HoldingsSchema);

module.exports = {HoldingSchema};
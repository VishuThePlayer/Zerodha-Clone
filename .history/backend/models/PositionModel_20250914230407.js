const {model} = require("mongoose");
const {PositionSchema} = require("../schemas/PositionSchema");


const PositionSchema = new Model("holding", HoldingsSchema);

module.exports = {HoldingSchema};
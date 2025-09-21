const {model} = require("mongoose");
const {PositionSchema} = require("../schemas/PositionSchema");


const PositionSchemas = new Model("holding", HoldingsSchema);

module.exports = {HoldingSchema};
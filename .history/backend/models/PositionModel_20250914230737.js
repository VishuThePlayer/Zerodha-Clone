const {model} = require("mongoose");
const {PositionSchema} = require("../schemas/PositionSchema");


const PositionSchemas = new model("holding", PositionSchema);

module.exports = {HoldingSchema};
const {model} = require("mongoose");
const {PositionSchema} = require("../schemas/PositionSchema");


const PositionSchemas = model("holding", PositionSchema);

module.exports = {PositionSchemas};
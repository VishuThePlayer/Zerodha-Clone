const {model} = require("mongoose");
const {PositionSchema} = require("../schemas/PositionSchema");


const PositionMod = model("holding", PositionSchema);

module.exports = {PositionSchemas};
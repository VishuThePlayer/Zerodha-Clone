const {model} = require("mongoose");
const {PositionSchema} = require("../schemas/PositionSchema");


const Position = model("holding", PositionSchema);

module.exports = {PositionSchemas};
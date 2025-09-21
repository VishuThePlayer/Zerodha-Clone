const {model} = require("mongoose");
const {PositionSchema} = require("../schemas/PositionSchema");


const PositionSche = model("holding", PositionSchema);

module.exports = {PositionSchemas};
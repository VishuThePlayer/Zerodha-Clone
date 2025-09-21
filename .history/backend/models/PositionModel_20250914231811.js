const {model} = require("mongoose");
const {PositionSchema} = require("../schemas/PositionSchema");


const PositionModel = model("holding", PositionSchema);

module.exports = {PositionModel};
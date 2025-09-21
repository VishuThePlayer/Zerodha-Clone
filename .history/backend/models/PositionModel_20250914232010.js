const {model} = require("mongoose");
const {PositionSchema} = require("../schemas/PositionSchema");


const PositionModel = model("pos", PositionSchema);

module.exports = {PositionModel};
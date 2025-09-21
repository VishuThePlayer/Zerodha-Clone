const {model} = require("mongoose");
const {PositionSchema} = require("../schemas/PositionSchema");


const PositionModel = model("p", PositionSchema);

module.exports = {PositionModel};
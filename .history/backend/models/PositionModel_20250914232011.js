const {model} = require("mongoose");
const {PositionSchema} = require("../schemas/PositionSchema");


const PositionModel = model("posi", PositionSchema);

module.exports = {PositionModel};
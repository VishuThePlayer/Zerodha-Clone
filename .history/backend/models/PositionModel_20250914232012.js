const {model} = require("mongoose");
const {PositionSchema} = require("../schemas/PositionSchema");


const PositionModel = model("posit", PositionSchema);

module.exports = {PositionModel};
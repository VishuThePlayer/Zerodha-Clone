const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");


const Holding = new model("holding", HoldingSchema);


module.exports = { Holding };

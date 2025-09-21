const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");


const Holding = mongooose.model("holding", HoldingSchema);


module.exports = { Holding };

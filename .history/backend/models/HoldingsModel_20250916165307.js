const { model } = require("mongoose");

const { HoldingSchema } = require("../schemas/HoldingSchema");


const Holding = model("holding", HoldingSchema);


module.exports = { Holding };

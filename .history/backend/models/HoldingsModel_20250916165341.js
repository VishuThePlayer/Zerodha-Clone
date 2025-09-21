const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");


const Holding = odel("holding", HoldingSchema);


module.exports = { Holding };

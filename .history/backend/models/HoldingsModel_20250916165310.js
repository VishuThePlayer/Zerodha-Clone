const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");


const Holding = nemodel("holding", HoldingSchema);


module.exports = { Holding };

const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");


const Holding = mongooosemodel("holding", HoldingSchema);


module.exports = { Holding };

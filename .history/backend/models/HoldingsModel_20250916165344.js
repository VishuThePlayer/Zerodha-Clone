const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");


const Holding = mongomodel("holding", HoldingSchema);


module.exports = { Holding };

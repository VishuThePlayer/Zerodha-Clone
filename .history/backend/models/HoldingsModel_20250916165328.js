const { Model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");


const Holding = Model("holding", HoldingSchema);


module.exports = { Holding };

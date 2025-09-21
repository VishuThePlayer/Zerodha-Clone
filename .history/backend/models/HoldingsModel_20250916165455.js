const mongoose  = require("mongoose");
const { us } = require("../schemas/HoldingSchema");


const Holding = mongoose.model("holding", HoldingSchema);


module.exports = { Holding };

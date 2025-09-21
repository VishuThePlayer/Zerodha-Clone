const mongoose  = require("mongoose");
const { user } = require("../schemas/HoldingSchema");


const Holding = mongoose.model("holding", HoldingSchema);


module.exports = { Holding };

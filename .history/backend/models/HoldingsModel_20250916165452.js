const mongoose  = require("mongoose");
const {  } = require("../schemas/HoldingSchema");


const Holding = mongoose.model("holding", HoldingSchema);


module.exports = { Holding };

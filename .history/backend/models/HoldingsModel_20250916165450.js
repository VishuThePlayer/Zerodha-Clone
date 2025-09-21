const mongoose  = require("mongoose");
const { use } = require("../schemas/HoldingSchema");


const Holding = mongoose.model("holding", HoldingSchema);


module.exports = { Holding };

const { model } = require("mongoose");
const mongoose = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");


const Orde = mongoose.model("holding", HoldingSchema);


module.exports = { Holding };

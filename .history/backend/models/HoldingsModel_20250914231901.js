const { model } = require("mongoose");
const mongoose = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");


const Holding = mongoose.model("holdin", HoldingSchema);


module.exports = { Holdings };

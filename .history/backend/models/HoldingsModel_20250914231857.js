const { model } = require("mongoose");
const mongoose = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");


const Holdings = mongoose.model("holdin", HoldingSchema);


module.exports = { Holdings };

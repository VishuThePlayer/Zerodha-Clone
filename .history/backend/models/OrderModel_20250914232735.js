const { model } = require("mongoose");
const mongoose = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");


const Orders = mongoose.model("holding", HoldingSchema);


module.exports = { Orders };

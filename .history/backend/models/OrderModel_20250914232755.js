const { model } = require("mongoose");
const mongoose = require("mongoose");
const { OrderSchema } = require("../schemas/HoldingSchema");

const Orders = mongoose.model("order", HoldingSchema);


module.exports = { Orders };

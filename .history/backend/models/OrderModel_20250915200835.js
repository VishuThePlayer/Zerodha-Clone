const { model } = require("mongoose");
const mongoose = require("mongoose");
const { OrderSchema } = require("../schemas/OrderSchema");

const Orders = mongoose.model("order", OrderSchema);

module.exports = { Orders };

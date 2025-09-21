const mongoose = require("mongoose");
const { OrderSchema } = require("../schemas/OrderSchema");

// Ye line model banati hai, jo MongoDB collection ko represent karega
const Orders = mongoose.model("orders", OrderSchema);

module.exports = { Orders };

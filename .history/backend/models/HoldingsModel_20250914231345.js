const { model } = require("mongoose");
const mongoose = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");

// Create a model from schema (no `new`)
if (mongoose.models.holding) {
  delete mongoose.models.holding;
}
const Holding = mongoose.model("holdin", HoldingSchema);


module.exports = { Holding };

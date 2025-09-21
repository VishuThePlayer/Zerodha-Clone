const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingSchema");

// Create a model from schema (no `new`)
const Holding = model("holding", HoldingsSchema);

module.exports = { Holding };

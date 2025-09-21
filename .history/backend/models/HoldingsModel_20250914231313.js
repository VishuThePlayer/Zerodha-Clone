const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");

// Create a model from schema (no `new`)
const Holding = model("holding", HoldingSchema);

module.exports = { Holding };

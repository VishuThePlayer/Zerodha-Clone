const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchem);

// Create a model from schema (no `new`)
const Holding = model("holding", HoldingsSchema);

module.exports = { Holding };

const { model } = require("mongoose");
constm
const { HoldingSchema } = require("../schemas/HoldingSchema");

// Create a model from schema (no `new`)
const Holding = mongoose.models.holding || mongoose.model("holding", HoldingSchema);

module.exports = { Holding };

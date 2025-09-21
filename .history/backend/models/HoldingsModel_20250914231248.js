const { model } = require("mongoose");
const mongoose = require("mongoose")/
const { HoldingSchema } = require("../schemas/HoldingSchema");

// Create a model from schema (no `new`)
const Holding = mongoose.models.holding || mongoose.model("holding", HoldingSchema);

module.exports = { Holding };

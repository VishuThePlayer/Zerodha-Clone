const {model} = require("mongoose");
const {HoldingsSchema} = require("../schemas/HoldingSchema");


const HoldingSchema = new Model("holding", HoldingsSchema);

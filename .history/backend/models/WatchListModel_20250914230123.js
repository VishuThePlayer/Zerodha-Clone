const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas/HoldingSchema");


const HoldingSchema = new Model("holding", HoldingsSchema);

module.exports = {HoldingSchema};
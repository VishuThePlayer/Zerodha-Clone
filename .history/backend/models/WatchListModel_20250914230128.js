const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas/");


const HoldingSchema = new Model("holding", HoldingsSchema);

module.exports = {HoldingSchema};
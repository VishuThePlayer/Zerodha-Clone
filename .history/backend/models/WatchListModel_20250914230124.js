const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas/WatchListSchema");


const HoldingSchema = new Model("holding", HoldingsSchema);

module.exports = {HoldingSchema};
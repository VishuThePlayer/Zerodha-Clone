const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas/WatchListSchem");


const HoldingSchema = new Model("holding", HoldingsSchema);

module.exports = {HoldingSchema};
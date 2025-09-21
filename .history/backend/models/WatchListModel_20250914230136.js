const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas//WatchlistSchema");


const HoldingSchema = new Model("holding", HoldingsSchema);

module.exports = {HoldingSchema};
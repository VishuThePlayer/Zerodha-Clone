const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas//WatchlistSchema");


const WatchListSchema = new Model("holding", HoldingsSchema);

module.exports = {HoldingSchema};
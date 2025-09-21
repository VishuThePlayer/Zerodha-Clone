const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas//WatchlistSchema");


const WatchListSchemas = new Model("holding", WatchListSchema);

module.exports = {HoldingSchema};
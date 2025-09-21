const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas//WatchlistSchema");


const WatchListSchemas = nmodel("holding", WatchListSchema);

module.exports = {WatchListSchema};
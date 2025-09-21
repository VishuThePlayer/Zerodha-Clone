const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas//WatchlistSchema");


const WatchListSchemas = new model("holding", WatchListSchema);

module.exports = {WatchListSchema};
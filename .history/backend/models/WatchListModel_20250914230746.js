const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas//WatchlistSchema");


const WatchListSchemas = model("holding", WatchListSchema);

module.exports = {WatchListSchemas};
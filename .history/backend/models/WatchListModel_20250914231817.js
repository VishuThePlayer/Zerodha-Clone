const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas//WatchlistSchema");


const WatchListMod = model("holding", WatchListSchema);

module.exports = {WatchListSchemas};
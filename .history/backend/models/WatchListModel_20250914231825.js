const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas//WatchlistSchema");


const WatchListModel = model("holding", WatchListSchema);

module.exports = {WatchListModel};
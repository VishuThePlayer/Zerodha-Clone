const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas//WatchlistSchema");


const WatchListModel = model("watchlist", WatchListSchema);

module.exports = {WatchListModel};
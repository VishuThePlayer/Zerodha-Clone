const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas//WatchlistSchema");


const WatchListModel = model("watchlios", WatchListSchema);

module.exports = {WatchListModel};
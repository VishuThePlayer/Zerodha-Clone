const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas//WatchlistSchema");


const WatchListModel = model("wa", WatchListSchema);

module.exports = {WatchListModel};
const {Schema} = require("mongoose");

const WatchListSchema = new Schema({
    name: String,
    price: Number,
    percent: St,
    isDown: Boolean,
})

module.exports = {WatchListSchema}
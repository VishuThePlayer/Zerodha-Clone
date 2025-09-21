const {Schema} = require("mongoose");

const WatchListSchema = new Schema({
    name: String,
    price: Number,
    percent: Number,
    isDown: Boolean,
})

module.exports = {}
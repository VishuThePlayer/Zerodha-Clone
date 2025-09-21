const {Schema} = require("mongoose");

const WatchListSchema = new Schema({
    name: String,
    price: Number,
    percent: "-1.60%",
    isDown: true,
})
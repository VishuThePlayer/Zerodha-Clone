const {Schema} = require("mongoose");

const WatchListSchema = new Schema({
    name: String,
    price: 1555.45,
    percent: "-1.60%",
    isDown: true,
})
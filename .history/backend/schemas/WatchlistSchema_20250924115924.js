const {Schema} = require("mongoose");

const WatchListSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // <-- reference to User
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})

module.exports = {WatchListSchema}
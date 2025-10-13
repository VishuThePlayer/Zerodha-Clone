const {mongoose, Schema} = require("mongoose");

const userFunds = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // <-- reference to User
    funds: {type: Number, default: 0 , require: true}
}, )
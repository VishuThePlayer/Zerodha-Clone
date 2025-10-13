const mongoose = require("mongoose");
const userFundsSchema = require("../schemas/UserFunds");

const UserFund = mongoose.model("UserFund", userFundsSchema);

module.exports = UserFund;

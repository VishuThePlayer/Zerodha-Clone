const {model, default: mongoose} = require("mongoose");
const userFunds = require("../schemas/UserFunds");


const userFundModel = mongoose.model(userFunds);

module.exports(userFundModel)
const mongoose = require("mongoose");
const userFunds = require("../models/UserFundsModel")

exports.checkFunds = async(req, res) => {
    res.json({success: true})
    const response = await userFunds.find({use})
}

exports.addFunds = async(req, res) => {
    res.json({success: true})
}
const mongoose = require("mongoose");
const userFunds = require("../models/UserFundsModel")

exports.checkFunds = async(req, res) => {
    res.json({success: true})
    const response = userFunds.findById
}

exports.addFunds = async(req, res) => {
    res.json({success: true})
}
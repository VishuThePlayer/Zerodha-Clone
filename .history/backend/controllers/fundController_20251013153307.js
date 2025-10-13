const mongoose = require("mongoose");
const userFunds = require("../models/UserFundsModel");
const User = require("../models/UserModel");

exports.checkFunds = async(req, res) => {
    res.json({success: true})
    const response = await userFunds.find({user: req.userID}).populate(User)
}

exports.addFunds = async(req, res) => {
    res.json({success: true})
}
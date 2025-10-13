const mongoose = require("mongoose");
const userFunds = require("../models/UserFundsModel");
const User = require("../models/UserModel");

exports.checkFunds = async(req, res) => {
    const response = await userFunds.find({user: req.userID}).populate("user", "username email");
    res.json({res})
    
}

exports.addFunds = async(req, res) => {
    res.json({success: true})
}
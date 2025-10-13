const mongoose = require("mongoose");
const userFunds = require("../models/UserFundsModel");
const User = require("../models/UserModel");

exports.checkFunds = async(req, res) => {
    const response = await userFunds.find({user: req.userID}).populate("user", "username email");
    if(response.length > 0){
        res.json({success: true, data: response.data});
    }
    res.json({success: false, data: response.data});
    
}

exports.addFunds = async(req, res) => {
    res.json({success: true})
}
const mongoose = require("mongoose");
const userFund = require("../models/UserFundsModel");
const User = require("../models/UserModel");
const UserFund = require("../models/UserFundsModel");

exports.checkFunds = async(req, res) => {
    const response = await userFunds.find({user: req.userID});
    if(response.length > 0){
        res.json({success: true, data: response[0].funds});
    }
    res.json({success: false, data: response});
    
}

exports.addFunds = async(req, res) => {
    const data = req.body;
    const addFund = UserFund
    console.log("Upcoming Bal: ", data);
}
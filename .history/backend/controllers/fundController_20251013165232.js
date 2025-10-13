const mongoose = require("mongoose");
const userFunds = require("../models/UserFundsModel");
const User = require("../models/UserModel");

exports.checkFunds = async(req, res) => {
    const response = await userFund.find({user: req.userID});
    if(response.length > 0){
        res.json({success: true, data: response[0].funds});
    }
    res.json({success: false, data: response});
    
}

exports.addFunds = async(req, res) => {
    const ammount = req.body;
    const addFund = userFunds.findByIdAndUpdate(req.userID,
        { $inc: { funds: ammount}},
        {new: true});
    console.log("Upcoming Bal: ", data);
}
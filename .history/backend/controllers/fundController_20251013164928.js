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
    const data = req.body;
    const addFund = userFunds.findByIdAndUpdate(id: req.userID, funds: datas)
    console.log("Upcoming Bal: ", data);
}
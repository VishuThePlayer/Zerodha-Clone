const mongoose = require("mongoose");
const userFunds = require("../models/UserFundsModel");
const User = require("../models/UserModel");

exports.checkFunds = async(req, res) => {
    const response = await userFunds.find({user: req.userID});
    if(response.length > 0){
        res.json({success: true, data: response[0].funds});
    }
    res.json({success: false, data: response});
    
}

exports.addFunds = async(req, res) => {
    const data = req.body;
    console.log("")
    res.json({success: true})
}
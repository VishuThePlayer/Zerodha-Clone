const mongoose = require("mongoose");
const userFund = require("../models/UserFundsModel");
const User = require("../models/UserModel");

exports.checkFunds = async(req, res) => {
    const response = await userFund.find({user: req.userID});
    if(response.length > 0){
        return res.json({success: true, data: response[0].funds});
    }
    return res.json({success: false, data: response});
    
}

exports.addFunds = async(req, res) => {
    const data = req.body;
    const ammount = data.quantity;

    if(!ammount || ammount <= 0){
        return res.status(400).json({ message: "Invalid amount" });
    }

    const updatedUser = await userFund.findByIdAndUpdate(req.userID,
        { $inc: { funds: ammount}},
        {new: true});

        co

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log("Updated Balance: ", updatedUser);
}
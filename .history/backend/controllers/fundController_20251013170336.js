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
    console.log(req.userID);
    cconst updatedUser = await UserFunds.findOneAndUpdate(
    { user: req.userID },
    { $inc: { funds: amount } },
    { new: true, upsert: true } // creates document if it doesn't exist
);


        console.log(updatedUser);

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log("Updated Balance: ", updatedUser);
}
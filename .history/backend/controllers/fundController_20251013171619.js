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
exports.addFunds = async (req, res) => {
  try {
    const { quantity } = req.body;
    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const updatedUser = await UserFunds.findOneAndUpdate(
      { user: req.userID },
      { $inc: { funds: quantity } },
      { new: true, upsert: true }
    );

    return res.status(200).json({ success: true, balance: updatedUser.funds });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

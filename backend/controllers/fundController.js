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
    const amount = Number(quantity);

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const updatedUser = await userFund.findOneAndUpdate(
      { user: req.userID },
      { $inc: { funds: amount } },
      { new: true, upsert: true } // creates document if it doesn't exist
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("Updated Balance: ", updatedUser.funds);

    // ✅ Send a response to the frontend
    return res.status(200).json({
      success: true,
      message: "Funds added successfully",
      balance: updatedUser.funds
    });

  } catch (err) {
    console.error("Error in addFunds:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

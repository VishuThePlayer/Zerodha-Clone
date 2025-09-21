const User = require("../models/UserModel");

module.exports.Signup = async (req, res) => {
  try {
    cons
    const newUser = new User(req.body); // ✅ works now
    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Account created successfully!"
    });
  } catch (error) {
    console.error("❌ Signup Error:", error);

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        success: false,
        message: `${field} already exists`
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

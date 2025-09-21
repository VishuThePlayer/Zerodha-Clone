const User = require("../models/UserModel");
const createSecretToken = require('../util/SecretToken');

module.exports.Signup = async (req, res) => {
  try {
    // Create a new user instance
    const newUser = new User(req.body);

    // Validate the use r instance before saving
    const validationError = newUser.validateSync();
    if (validationError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationError.errors,
      });
    }

    // Save user to DB
    const savedUser = await newUser.save();
    createSecretToken = (savedUser_.id);
    res.cookie("token",)

    res.status(201).json({
      success: true,
      message: "Account created successfully!", // optional: return saved user data for debug
      data: {
    _id: savedUser._id,
    email: savedUser.email,
    firstName: savedUser.firstName,
    lastName: savedUser.lastName,
    username: savedUser.username,
    phone: savedUser.phone
  }
    });
  } catch (error) {

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        success: false,
        message: `${field} already exists`,
      });
    }

    // Catch-all for other errors
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message, // include message for debugging
    });
  }
};

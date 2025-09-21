const User = require("../models/UserModel");

module.exports.Signup = async (req, res) => {
  try {
    console.log("📥 Incoming signup request body:", req.body);

    // Create a new user instance
    const newUser = new User(req.body);
    console.log("🛠️ Created newUser instance:", newUser);

    // Validate the user instance before saving
    const validationError = newUser.validateSync();
    if (validationError) {
      console.error("⚠️ Validation error:", validationError);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationError.errors,
      });
    }

    // Save user to DB
    const savedUser = await newUser.save();
    console.log("✅ User saved successfully:", savedUser);

    res.status(201).json({
      success: true,
      message: "Account created successfully!",
      data: savedUser, // optional: return saved user data for debug
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
    console.error("❌ Signup Error:", error);

    // Handle duplicate key errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      console.log(`⚠️ Duplicate key error on field: ${field}`);
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

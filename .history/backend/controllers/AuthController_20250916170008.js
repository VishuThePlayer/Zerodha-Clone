const User = require("../");

module.exports.Signup = async (req, res, next) => {
  try {
    console.log("📥 Incoming Signup Data:", req.body);

    // Create a new User instance
    const newUser = new User(req.body);

    // Save to DB
    await newUser.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "Account created successfully!",
    });
  } catch (error) {
    console.error("❌ Signup Error:", error);

    // Handle duplicate email/username error
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        success: false,
        message: `${field} already exists`,
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

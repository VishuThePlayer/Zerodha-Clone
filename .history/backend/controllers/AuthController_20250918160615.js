const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Make sure to import this!
const { createSecretToken } = require("../util/SecretToken");

module.exports.Signup = async (req, res) => {
    try {
      const newUser = new User(req.body);
      const validationError = newUser.validateSync();

      if (validationError) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: validationError.errors,
        });
      }

      const savedUser = await newUser.save();

      // Generate token
      const token = createSecretToken(savedUser._id);

      // 🔧 FIXED: Cookie settings for cross-origin sharing
      const cookieOptions = {
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
        path: "/",
      };

      // For development (localhost) - use lax sameSite
      if (process.env.NODE_ENV === "development") {
        cookieOptions.sameSite = "lax";
      } else {
        // For production - use none with secure
        cookieOptions.sameSite = "none";
        cookieOptions.secure = true;
      }

      res.cookie("token", token, cookieOptions);

      res.status(201).json({
        success: true,
        message: "Account created successfully!",
        data: {
          _id: savedUser._id,
          email: savedUser.email,
          firstName: savedUser.firstName,
          lastName: savedUser.lastName,
          username: savedUser.username,
          phone: savedUser.phone,
        },
      });

    } catch (error) {
      if (error.code === 11000) {
        const field = Object.keys(error.keyPattern)[0];
        return res.status(400).json({
          success: false,
          message: `${field} already exists`,
        });
      }

      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    // Generate token
    const token = createSecretToken(user._id);

    // 🔧 FIXED: Same cookie settings as signup
    const cookieOptions = {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000,
      path: "/",
    };

    if (process.env.NODE_ENV === "development") {
      cookieOptions.sameSite = "lax";
    } else {
      cookieOptions.sameSite = "none";
      cookieOptions.secure = true;
    }

    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
      data: {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        phone: user.phone,
      },
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports.getCurrentUser = async (req, res) => {
  const token = req.cookies.token;
  console.log("Token from cookies:", token);

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const userId = decoded.id;
    const user = await User.findById(userId).select("-password");
    res.json({ success: true, user });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
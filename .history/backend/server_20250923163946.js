// controllers/authController.js
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createSecretToken } = require("../util/SecretToken"); // your helper that calls jwt.sign()
require("dotenv").config();

// Helper: standard JSON response
const sendResponse = (res, status, payload) => res.status(status).json(payload);

// Determine env (treat anything other than exact 'production' as dev)
const isProd = process.env.NODE_ENV === "production";

module.exports.Signup = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const validationError = newUser.validateSync();

    if (validationError) {
      return sendResponse(res, 400, {
        success: false,
        message: "Validation failed",
        errors: validationError.errors,
      });
    }

    // Ensure password hashing is handled in model pre-save hook.
    const savedUser = await newUser.save();

    // Generate token (ensure createSecretToken sets expiry, e.g. "3d")
    const token = createSecretToken(savedUser._id);

    // Cookie options consistent for signup & login
    const cookieOptions = {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
      path: "/", // cookie available for whole backend domain
    };

    if (!isProd) {
      // development: local testing (no secure flag)
      cookieOptions.sameSite = "lax";
      cookieOptions.secure = false;
    } else {
      // production: allow cross-site cookies (must be HTTPS)
      cookieOptions.sameSite = "none";
      cookieOptions.secure = true;
    }

    // Debug log (remove in final production if you don't want token logging)
    console.log("Signup: sending cookie with options:", {
      sameSite: cookieOptions.sameSite,
      secure: cookieOptions.secure,
      httpOnly: cookieOptions.httpOnly,
      path: cookieOptions.path,
    });

    res.cookie("token", token, cookieOptions);

    return sendResponse(res, 201, {
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
    console.error("Signup error:", error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern || {})[0] || "field";
      return sendResponse(res, 400, {
        success: false,
        message: `${field} already exists`,
      });
    }

    return sendResponse(res, 500, {
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
      return sendResponse(res, 400, {
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return sendResponse(res, 400, {
        success: false,
        message: "Incorrect email or password",
      });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return sendResponse(res, 400, {
        success: false,
        message: "Incorrect email or password",
      });
    }

    // Generate token
    const token = createSecretToken(user._id);

    // Cookie options (same as signup)
    const cookieOptions = {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000,
      path: "/",
    };

    if (!isProd) {
      cookieOptions.sameSite = "lax";
      cookieOptions.secure = false;
    } else {
      cookieOptions.sameSite = "none"; // MUST be none for cross-site cookies
      cookieOptions.secure = true;
    }

    console.log("Login: sending cookie with options:", {
      sameSite: cookieOptions.sameSite,
      secure: cookieOptions.secure,
    });

    res.cookie("token", token, cookieOptions);

    return sendResponse(res, 200, {
      success: true,
      message: "User logged in successfully",
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
    console.error("Login error:", error);
    return sendResponse(res, 500, {
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports.getCurrentUser = async (req, res) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return sendResponse(res, 401, { success: false, message: "Not authenticated" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.TOKEN_KEY);
    } catch (err) {
      console.warn("Token verify failed:", err.message);
      return sendResponse(res, 401, { success: false, message: "Invalid token" });
    }

    const userId = decoded.id || decoded._id || decoded.userId;
    if (!userId) {
      return sendResponse(res, 401, { success: false, message: "Invalid token payload" });
    }

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return sendResponse(res, 404, { success: false, message: "User not found" });
    }

    return sendResponse(res, 200, { success: true, user });
  } catch (err) {
    console.error("getCurrentUser error:", err);
    return sendResponse(res, 500, { success: false, message: "Server error", error: err.message });
  }
};

module.exports.logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      path: "/",
      sameSite: !isProd ? "lax" : "none",
      secure: isProd,
    });

    return sendResponse(res, 200, { success: true, message: "Logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    return sendResponse(res, 500, { success: false, message: "Server error", error: err.message });
  }
};

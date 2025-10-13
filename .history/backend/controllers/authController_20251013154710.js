const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createSecretToken } = require("../util/SecretToken");
const UserFund = require("../models/UserFundsModel");
require("dotenv").config();

// Helper: standard JSON response
const sendResponse = (res, status, payload) => res.status(status).json(payload);

// 🔧 FIXED: Better environment detection
const isProd = process.env.NODE_ENV === "production" || process.env.VERCEL === "1";

// 🔧 FIXED: Consistent cookie configuration
const getCookieOptions = () => {
  const baseOptions = {
    httpOnly: true,
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    path: "/",
  };

  if (isProd) {
    // Production settings for cross-origin cookies
    return {
      ...baseOptions,
      sameSite: "none", // Required for cross-site cookies
      secure: true, // Required when sameSite is "none"
      domain: undefined // Let browser handle domain
    };
  } else {
    // Development settings
    return {
      ...baseOptions,
      sameSite: "lax",
      secure: false
    };
  }
};

module.exports.Signup = async (req, res) => {
  try {
    console.log("🔧 Signup attempt for:", req.body.email);
    
    const newUser = new User(req.body);
    const validationError = newUser.validateSync();

    if (validationError) {
      return sendResponse(res, 400, {
        success: false,
        message: "Validation failed",
        errors: validationError.errors,
      });
    }

    const savedUser = await newUser.save();
    console.log("✅ User created:", savedUser.email);

    // Generate token
    const token = createSecretToken(savedUser._id);
    const cookieOptions = getCookieOptions();

    console.log("🍪 Setting cookie with options:", {
      sameSite: cookieOptions.sameSite,
      secure: cookieOptions.secure,
      httpOnly: cookieOptions.httpOnly,
      environment: isProd ? 'production' : 'development'
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
    console.error("❌ Signup error:", error);
    
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

    const userFund = await UserFund.insertOne({user: req.userID, funds: 0})
    console.log(userFund)
;    console.log("🔧 Login attempt for:", req.body.email);
    console.log("Request origin:", req.get('Origin'));
    
    const { email, password } = req.body;

    if (!email || !password) {
      return sendResponse(res, 400, {
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found:", email);
      return sendResponse(res, 400, {
        success: false,
        message: "Incorrect email or password",
      });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      console.log("❌ Password mismatch for:", email);
      return sendResponse(res, 400, {
        success: false,
        message: "Incorrect email or password",
      });
    }

    // Generate token
    const token = createSecretToken(user._id);
    const cookieOptions = getCookieOptions();

    console.log("🍪 Setting login cookie with options:", {
      sameSite: cookieOptions.sameSite,
      secure: cookieOptions.secure,
      httpOnly: cookieOptions.httpOnly,
      environment: isProd ? 'production' : 'development'
    });

    res.cookie("token", token, cookieOptions);

    console.log("✅ Login successful for:", email);

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
    console.error("❌ Login error:", error);
    return sendResponse(res, 500, {
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports.getCurrentUser = async (req, res) => {
  try {
    console.log("🔍 Getting current user...");
    console.log("Cookies received:", req.cookies);
    
    const token = req.cookies?.token;

    if (!token) {
      console.log("❌ No token found in cookies");
      return sendResponse(res, 401, { 
        success: false, 
        message: "Not authenticated - no token" 
      });
    }

    console.log("🔧 Token found, verifying...");
    
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.TOKEN_KEY);
      console.log("✅ Token verified, user ID:", decoded.id);
    } catch (err) {
      console.warn("❌ Token verification failed:", err.message);
      return sendResponse(res, 401, { 
        success: false, 
        message: "Invalid token" 
      });
    }

    const userId = decoded.id || decoded._id || decoded.userId;
    if (!userId) {
      console.log("❌ No user ID in token payload");
      return sendResponse(res, 401, { 
        success: false, 
        message: "Invalid token payload" 
      });
    }

    const user = await User.findById(userId).select("-password");
    if (!user) {
      console.log("❌ User not found in database:", userId);
      return sendResponse(res, 404, { 
        success: false, 
        message: "User not found" 
      });
    }

    console.log("✅ User found:", user.email);
    return sendResponse(res, 200, { success: true, user });
    
  } catch (err) {
    console.error("❌ getCurrentUser error:", err);
    return sendResponse(res, 500, { 
      success: false, 
      message: "Server error", 
      error: err.message 
    });
  }
};

module.exports.logout = async (req, res) => {
  try {
    console.log("🚪 Logging out user");
    
    const cookieOptions = getCookieOptions();
    
    // Clear the cookie
    res.cookie("token", "", {
      ...cookieOptions,
      expires: new Date(0), // Set expiration in the past
      maxAge: 0
    });

    console.log("✅ User logged out successfully");
    return sendResponse(res, 200, { 
      success: true, 
      message: "Logged out successfully" 
    });
    
  } catch (err) {
    console.error("❌ Logout error:", err);
    return sendResponse(res, 500, { 
      success: false, 
      message: "Server error", 
      error: err.message 
    });
  }
};
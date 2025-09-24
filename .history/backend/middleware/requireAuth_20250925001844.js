const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id).select("-password");
    req.userID = decoded.id;
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Attach user to request so next middleware/route can use it
    req.user = user;
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = requireAuth;

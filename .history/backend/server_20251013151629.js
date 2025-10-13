const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const NodeCache = require("node-cache");

// DB connection
require("./config/db");

const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const watchlistRoutes = require("./routes/watchlistRoutes");
const stockRoutes = require("./routes/stockRoutes");
const User = require("./models/UserModel");
const { message } = require("./middleware/shcemaValidation");

const app = express();
const PORT = process.env.PORT || 5000;

// 🔧 FIXED: Improved CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman or mobile apps)
    if (!origin) return callback(null, true);

    // ✅ Clean list of allowed origins (no trailing slashes or paths)
    const allowedOrigins = [
      "https://zerodha-clone-three-delta.vercel.app",
      "https://zerodha-clone-59ps.vercel.app",
      "http://localhost:3000",
      "http://localhost:3001",
    ];

    console.log("🔍 CORS Check - Origin:", origin);

    if (allowedOrigins.includes(origin)) {
      console.log("✅ CORS allowed for:", origin);
      callback(null, true);
    } else {
      console.error("❌ CORS blocked for origin:", origin);
      callback(new Error(`Not allowed by CORS. Origin: ${origin}`));
    }
  },
  credentials: true, // Essential for cookies
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: [
    "Content-Type", 
    "Authorization", 
    "X-Requested-With",
    "Accept",
    "Origin"
  ],
  exposedHeaders: ["Set-Cookie"], // Allow frontend to see Set-Cookie header
  optionsSuccessStatus: 200, // For legacy browser support
  preflightContinue: false
};

// Apply CORS before other middleware
app.use(cors(corsOptions));


// Other middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(express.json());

// Cache for 60 seconds to avoid hitting NSE too frequently
const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 });




// // Add request logging middleware
// app.use(async (req, res, next) => {
//   try {
//     let token = req.cookies.token;
//     if(!token) return error({message: "Token not Found"})
//     const decoded = jwt.verify(token, process.env.TOKEN_KEY)
//     const user = await User.findById(decoded.id);
//     req.userID = decoded.id;
//     console.log("!--------------------------------!")
//     console.log("Req was made by user:", user.username);
//     console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
//     console.log('Origin:', req.get('Origin'));
//     console.log('Cookies:', req.cookies);
//     next();
//   } catch (error) {
//   }

// });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/funds", orderRoutes);
app.use("/api/watchlist", watchlistRoutes);
app.use("/api/stock", stockRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
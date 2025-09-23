const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("dotenv").config();

// DB connection
require("./config/db");

const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const watchlistRoutes = require("./routes/watchlistRoutes");
const stockRoutes = require("./routes/stockRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// 🔧 UPDATED: CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman or mobile apps)
    if (!origin) return callback(null, true);

    // ✅ Path hata do, sirf domain + protocol rakho
    const allowedOrigins = [
      "https://zerodha-clone-three-delta.vercel.app",
      "https://zerodha-clone-mciov8usv-vishutheplayers-projects.vercel.app/",
      "https://zerodha-clone-mciov8usv-vishutheplayers-projects.vercel.app",
      "https://zerodha-clone-59ps.vercel.app",
      "http://localhost:3000", // ✅ For local dev
      "http://localhost:3001", // ✅ For local dev
    ];

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("❌ CORS blocked for origin:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Enable cookies
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};



app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/watchlist", watchlistRoutes);
app.use("/api/stock", stockRoutes)

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
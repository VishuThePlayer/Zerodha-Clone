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

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: ["http://localhost:3000eveything ", "http://localhost:3001"], // your frontends
  credentials: true, // important for cookies
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/watchlist", watchlistRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

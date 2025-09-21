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
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.json());

// Routes
a   pp.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/watchlist", watchlistRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

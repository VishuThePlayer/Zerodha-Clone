const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
require("dotenv").config();

const HoldingsModel = require("./models/HoldingsModel");
const PositionModel = require("./models/PositionModel");
const WatchListModel = require("./models/WatchListModel");
const OrderMpdel = require("")

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

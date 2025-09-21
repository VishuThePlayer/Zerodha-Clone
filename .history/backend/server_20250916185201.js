const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const holdingRoutes = require("./routes/holdingRoutes");
const watchlistRoutes = require("./routes/watchlistRoutes");
const { PositionModel } = require("./models/PositionModel");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Use Routers
app.use("/", authRoutes);
app.use("/", orderRoutes);
app.use("/", holdingRoutes);
app.use("/", watchlistRoutes);

// Positions route (can also be moved to its own file)
app.get("/allPositions", async (req, res) => {
  try {
    let query = await PositionModel.find({});
    res.json(query);
  } catch (error) {
    res.send("Error" + error.message);
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const express = require("express");
const { Orders } = require("../models/OrderModel");
const { Holding } = require("../models/HoldingsModel");

const router = express.Router();

router.post("/newOrder", async (req, res) => {
  try {
    const data = req.body;
    const Holdingdata = {
      name: req.body.name,
      qnty: req.body.qty,
      avg: req.body.price,
      price: req.body.price,
      net: "0.00",
      day: "0%",
    };

    console.log("📥 Incoming Order:", data);

    const newOrder = new Orders(data);
    const newHolding = new Holding(Holdingdata);

    await newOrder.save();
    await newHolding.save();

    console.log("✅ Order Saved");
    res.status(201).json({ success: true, order: newOrder });
  } catch (error) {
    console.error("❌ Error saving order:", error.message);
    res.status(500).json({ success: false, message: "Failed to save order" });
  }
});

module.exports = router;

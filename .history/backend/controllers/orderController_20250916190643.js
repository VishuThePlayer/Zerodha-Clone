const { Orders } = require("../models/OrderModel");
const { Holding } = require("../models/HoldingsModel");

exports.createOrder = async (req, res) => {
  try {
    const data = req.body;
    const Holdingdata = {
      name: data.name,
      qnty: data.qty,
      avg: data.price,
      price: data.price,
      net: "0.00",
      day: "0%"
    };

    console.log("📥 Incoming Order:", data);

    const newOrder = new Orders(data);
    const newHolding = new Holding(Holdingdata);

    await newOrder.save();
    await newHolding.save();

    res.status(201).json({ success: true, order: newOrder });
  } catch (error) {
    console.error("❌ Error saving order:", error.message);
    res.status(500).json({ success: false, message: "Failed to save order" });
  }
};

exports.getAllHoldings = async (req, res) => {
  try {
    const holdings = await Holding.find({});
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllPositions = async (req, res) => {
  try {
    const positions = awaiot
  
  } catch (error) {
    
  }
}

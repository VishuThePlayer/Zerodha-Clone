const express = require("express");
const { Holding } = require("../models/HoldingsModel");

const router = express.Router();

// // Sample data (optional - you can move to separate file)
// const sampleHoldings = [
//   { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
//   { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
//   // ... rest of your sample data
// ];

router.get("/allHoldings", async (req, res) => {
  try {
    let query = await Holding.find({});
    res.json(query);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

// router.get("/addHolding", async (req, res) => {
//   try {
//     for (const item of sampleHoldings) {
//       const newHolding = new Holding({
//         name: item.name,
//         qnty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//       });
//       await newHolding.save();
//     }
//     res.send("Data is inserted ✅");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error inserting holdings ❌: " + error.message);
//   }
// });

module.exports = router;

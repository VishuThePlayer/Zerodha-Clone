const express = require("express");
const { WatchListModel } = require("../models/WatchListModel");

const router = express.Router();

router.get("/allWatchlist", getWatchList);

// router.get("/addWatchlist", async (req, res) => {
//   let data = [
//     { name: "INFY", price: 1555.45, percent: "-1.60%", isDown: true },
//     { name: "ONGC", price: 116.8, percent: "-0.09%", isDown: true },
//     { name: "TCS", price: 3194.8, percent: "-0.25%", isDown: true },
//   ];
//   try {
//     await WatchListModel.insertMany(data);
//     res.send("Watchlist added!");
//   } catch (error) {
//     res.status(500).send("Error: " + error.message);
//   }
// });

module.exports = router;

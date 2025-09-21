const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
require("dotenv").config();

const {Holding} = require("./models/HoldingsModel");
const {PositionModel} = require("./models/PositionModel");
const {WatchListModel} = require("./models/WatchListModel");
const OrderMpdel = require("./models/OrderModel");

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

let data = [{
                    name: "BHARTIARTL",
                    qty: 2,
                    avg: 538.05,
                    price: 541.15,
                    net: "+0.58%",
                    day: "+2.99%",
                },
                {
                    name: "HDFCBANK",
                    qty: 2,
                    avg: 1383.4,
                    price: 1522.35,
                    net: "+10.04%",
                    day: "+0.11%",
                },
                {
                    name: "HINDUNILVR",
                    qty: 1,
                    avg: 2335.85,
                    price: 2417.4,
                    net: "+3.49%",
                    day: "+0.21%",
                },
                {
                    name: "INFY",
                    qty: 1,
                    avg: 1350.5,
                    price: 1555.45,
                    net: "+15.18%",
                    day: "-1.60%",
                    isLoss: true,
                },
                {
                    name: "ITC",
                    qty: 5,
                    avg: 202.0,
                    price: 207.9,
                    net: "+2.92%",
                    day: "+0.80%",
                },
                {
                    name: "KPITTECH",
                    qty: 5,
                    avg: 250.3,
                    price: 266.45,
                    net: "+6.45%",
                    day: "+3.54%",
                },
                {
                    name: "M&M",
                    qty: 2,
                    avg: 809.9,
                    price: 779.8,
                    net: "-3.72%",
                    day: "-0.01%",
                    isLoss: true,
                },
                {
                    name: "RELIANCE",
                    qty: 1,
                    avg: 2193.7,
                    price: 2112.4,
                    net: "-3.71%",
                    day: "+1.44%",
                },
                {
                    name: "SBIN",
                    qty: 4,
                    avg: 324.35,
                    price: 430.2,
                    net: "+32.63%",
                    day: "-0.34%",
                    isLoss: true,
                },
                {
                    name: "SGBMAY29",
                    qty: 2,
                    avg: 4727.0,
                    price: 4719.0,
                    net: "-0.17%",
                    day: "+0.15%",
                },
                {
                    name: "TATAPOWER",
                    qty: 5,
                    avg: 104.2,
                    price: 124.15,
                    net: "+19.15%",
                    day: "-0.24%",
                    isLoss: true,
                },
                {
                    name: "TCS",
                    qty: 1,
                    avg: 3041.7,
                    price: 3194.8,
                    net: "+5.03%",
                    day: "-0.25%",
                    isLoss: true,
                },
                {
                    name: "WIPRO",
                    qty: 4,
                    avg: 489.3,
                    price: 577.75,
                    net: "+18.08%",
                    day: "+0.32%",
                },
];

// Routes

app.post("/newOrder", (re))

app.get("/allWatchlist", async (req, res) => {
  try {
    const query = await WatchListModel.find({});
    res.json(query);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

app.get("/addWatchlist", async (req, res) => {
  let data = [
    { name: "INFY", price: 1555.45, percent: "-1.60%", isDown: true },
    { name: "ONGC", price: 116.8, percent: "-0.09%", isDown: true },
    { name: "TCS", price: 3194.8, percent: "-0.25%", isDown: true },
  ];
  try {
    await WatchListModel.insertMany(data);
    res.send("Watchlist added!");
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

app.get("/allHoldings", async(req, res) => {
    try {
        let query = await Holding.find({});
        res.json(query);
    } catch (error) {
        res.send("Error" + error.message);
    }
})

app.get("/allPositions", async(req, res) => {
    try {
        let query = await PositionModel.find({});
        res.json(query);
    } catch (error) {
        res.send("Error" + error.message);
    }
})


// app.get("/addPositions", async (req, res) => {
//     let data = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 314.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];

//     try {
//         for (const item of data) {
//             const newPosition = new PositionModel(item); // pass the item object
//             await newPosition.save(); // wait for DB save
//         }

//         res.send("Saved to DB ✅");
//     } catch (error) {
//         console.error("DB Save Error:", error); // log full error
//         res.status(500).send("Error saving to DB ❌: " + error.message);
//     }
// });





app.get("/addHolding", async(req, res) => {

  data.forEach((item) => {
    let newHolding = new Holding({
        name: item.name,
        qnty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day,
    });

    newHolding.save();
  });


  res.send("Data is Inserted")
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

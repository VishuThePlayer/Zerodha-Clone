const { Orders } = require("../models/OrderModel");
const { Holding } = require("../models/HoldingsModel");
const { PositionModel } = require("../models/PositionModel");

exports.createOrder = async (req, res) => {
  try {
    const data = req.body;
    const Holdingdata = {
      user: req.userID,
      name: data.name,
      qnty: data.qty,
      avg: data.price,
      price: data.price,
      net: "0.00",
      day: "0%"
    };

    console.log("📥 Incoming Order:", data);
    console.log("📥 Incoming Order:", req.userID);

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
    const holdings = await Holding.find({ user: req.userID })
  .populate("user", "username email");
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  console.log("Received order req", req.userID)
  try {
    // ✅ Fetch only orders belonging to the logged-in user
    const orders = await Orders.find({ user: req.userID }).populate("user", "username email");
    
    res.json({
      success: true,
      count: orders.length,
      orders
    });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.getAllPositions = async (req, res) => {
  try {
    const positions = await PositionModel.find({ user: req.userID })
  .populate("user", "username email");

    res.json(positions)
  
  } catch (error) {
     res.status(500).json({ success: false, message: error.message });
  }
}

// ✅ Utility: Random stock generator
function getRandomStock() {
  const stocks = ["TCS", "INFY", "RELIANCE", "HDFCBANK", "ICICIBANK", "WIPRO", "LT", "SBIN", "ITC", "MARUTI"];
  return stocks[Math.floor(Math.random() * stocks.length)];
}

function randomPercent() {
  const value = (Math.random() * 4 - 2).toFixed(2); // -2% to +2%
  return value > 0 ? `+${value}%` : `${value}%`;
}

function randomDayChange() {
  const value = (Math.random() * 200 - 100).toFixed(2); // -100 to +100
  return value > 0 ? `+${value}` : `${value}`;
}

exports.addRandom = async (req, res) => {
  try {
    // Step 1: Create 10 users
    const users = [];
    for (let i = 1; i <= 10; i++) {
      users.push({
        username: `user${i}`,
        email: `user${i}@mail.com`
      });
    }
    const createdUsers = await User.insertMany(users);

    // Step 2: Create holdings for each user
    const holdings = [];
    createdUsers.forEach(user => {
      holdings.push({
        user: "{
  "_id": {
    "$oid": "68cacfef6f32977366d72579"
  },
  "email": "vishubistsa@gmail.com",
  "firstName": "Vitshu",
  "lastName": "Visthu",
  "password": "$2b$10$EVxVfkg7nOKCquVu5H.pZOIJ4qwvajpEchJzAJ6HHuN9g5i8Ssf0y",
  "phone": "8209863500",
  "username": "Vishu",
  "createdAt": {
    "$date": "2025-09-17T15:12:47.468Z"
  },
  "updatedAt": {
    "$date": "2025-09-17T15:12:47.468Z"
  },
  "__v": 0
}",
        name: getRandomStock(),
        qnty: Math.floor(Math.random() * 10) + 1,
        avg: (Math.random() * 3000 + 1000).toFixed(2),
        price: (Math.random() * 3000 + 1000).toFixed(2),
        net: randomPercent(),
        day: randomDayChange()
      });
    });

    const createdHoldings = await Holding.insertMany(holdings);

    res.json({
      success: true,
      message: "✅ 10 random holdings created with 10 different users",
      users: createdUsers,
      holdings: createdHoldings
    });

  } catch (error) {
    console.error("❌ Error adding random holdings:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

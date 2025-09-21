const { WatchListModel } = require("../models/WatchListModel");

exporasync (req, res) => {
  try {
    const query = await WatchListModel.find({});
    res.json(query);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});
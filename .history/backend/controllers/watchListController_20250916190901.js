async (req, res) => {
  try {
    const query = await WatchListMode.find({});
    res.json(query);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});
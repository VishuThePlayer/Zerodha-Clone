const express = require("express");
const router = express.Router();

const {getCurrentUser } = require("../controllers/authController");
const {, getLivePrice } = require("../controllers/stockController");
const requireAuth = require("../middleware/requireAuth");

router.get("/live", getLivePrice);

module.exports = router;

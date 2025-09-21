const express = require("express");
const router = express.Router();

const {getCurrentUser } = require("../controllers/authController");
const { stockDataGeneration } = require("../controllers/stockController");
const requireAuth = require("../middleware/requireAuth");

router.get("/", requireAuth, stockDataGeneration);

module.exports = router;

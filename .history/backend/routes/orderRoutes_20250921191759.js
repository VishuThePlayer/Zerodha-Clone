const express = require("express");
const router = express.Router();

const { createOrder, getAllHoldings, getAllPositions } = require("../controllers/orderController");
const requireAuth = require("../middleware/requireAuth");

router.post("/", requireAuth, createOrder);
router.get("/holdings",  getAllHoldings);
router.get("/positions", getAllPositions)

module.exports = router;

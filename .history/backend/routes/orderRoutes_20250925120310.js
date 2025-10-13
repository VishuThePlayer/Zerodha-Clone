const express = require("express");
const router = express.Router();

const { createOrder, getAllHoldings, getAllPositions, getAllOrders, addRandom } = require("../controllers/orderController");
const requireAuth = require("../middleware/requireAuth");

router.post("/", requireAuth, createOrder);
router.get("/holdings", requireAuth, getAllHoldings);
router.get("/addRandom", requireAuth, addRandom);
router.get("/allorders", requireAuth, getAllOrders);
router.get("/positions", requireAuth, getAllPositions);

module.exports = router;
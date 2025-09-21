const express = require("express");
const router = express.Router();

const { createOrder, getAllHoldings, getAllPositions } = require("../controllers/orderController");

router.post("/", requi createOrder);
router.get("/holdings", getAllHoldings);
router.get("/positions", getAllPositions)

module.exports = router;

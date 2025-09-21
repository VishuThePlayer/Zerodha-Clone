const express = require("express");
const router = express.Router();

const { createOrder, getAllHoldings } = require("../controllers/orderController");

router.post("/", createOrder);
router.get("/holdings", getAllHoldings);
router.get("/positions",)

module.exports = router;

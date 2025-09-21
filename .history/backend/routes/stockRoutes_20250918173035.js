const express = require("express");
const router = express.Router();

const {getCurrentUser } = require("../controllers/authController");

router.get("/", getCurrentUser, stockData);

module.exports = router;

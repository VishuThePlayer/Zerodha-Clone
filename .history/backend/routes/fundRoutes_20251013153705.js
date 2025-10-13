const express = require("express");
const { checkFunds } = require("../controllers/fundController");
const router = express.Router();

router.get("/", requireAut, checkFunds);

module.exports = router;
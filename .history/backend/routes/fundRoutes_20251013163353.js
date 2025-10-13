const express = require("express");
const { checkFunds } = require("../controllers/fundController");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

router.get("/", requireAuth, checkFunds);
router.port("/", requireAuth, checkFunds);

module.exports = router;
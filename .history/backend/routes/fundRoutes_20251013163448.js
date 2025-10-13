const express = require("express");
const { checkFunds, addFunds } = require("../controllers/fundController");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

router.get("/", requireAuth, checkFunds);
router.pos("/addFunds", requireAuth, addFunds);

module.exports = router;
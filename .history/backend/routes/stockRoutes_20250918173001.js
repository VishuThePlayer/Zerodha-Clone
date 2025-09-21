const express = require("express");
const router = express.Router();

const {getCurrentUser } = require("../controllers/authController");

router.get("/m", getCurrentUser);

module.exports = router;

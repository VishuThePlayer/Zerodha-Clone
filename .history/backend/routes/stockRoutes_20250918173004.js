const express = require("express");
const router = express.Router();

const {getCurrentUser } = require("../controllers/authController");

router.get("/sto", getCurrentUser);

module.exports = router;

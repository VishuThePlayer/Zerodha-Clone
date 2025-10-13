const express = require("express");
const { checkFunds } = require("../controllers/fundController");
const {add}
const router = express.Router();

router.get("/", checkFunds)
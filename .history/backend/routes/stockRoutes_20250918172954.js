const express = require("express");
const router = express.Router();

const {getCurrentUser } = require("../controllers/authController");
const signupSchemaValidation = require("../middleware/shcemaValidation");
const { validateSchema } = require("../middleware/schemaValidationCheck");


router.get("/me", getCurrentUser);

module.exports = router;

const express = require("express");
const { Signup } = require("../controllers/AuthController");
const signupSchemaValidation = require("../middleware/shcemaValidation");
const { validateSchema } = require("../middleware/schemaValidationCheck");

const router = express.Router();

router.post("/signup", validateSchema(signupSchemaValidation), Signup);

module.exports = router;

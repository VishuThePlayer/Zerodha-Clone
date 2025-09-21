const express = require("express");
const router = express.Router();

const { Signup } = require("../);
const signupSchemaValidation = require("../middleware/shcemaValidation");
const { validateSchema } = require("../middleware/schemaValidationCheck");

router.post("/signup", validateSchema(signupSchemaValidation), Signup);

module.exports = router;

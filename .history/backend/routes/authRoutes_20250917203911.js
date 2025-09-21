const express = require("express");
const router = express.Router();

const { Signup } = require("../controllers/authController");
const signupSchemaValidation = require("../middleware/shcemaValidation");
const { validateSchema } = require("../middleware/schemaValidationCheck");

router.post("/signup", validateSchema(signupSchemaValidation), Signup);
router.post("/l", validateSchema(signupSchemaValidation), Signup);

module.exports = router;

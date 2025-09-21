const express = require("express");
const router = express.Router();

const { Signup, login } = require("../controllers/authController");
const signupSchemaValidation = require("../middleware/shcemaValidation");
const { validateSchema } = require("../middleware/schemaValidationCheck");

router.post("/signup", validateSchema(signupSchemaValidation), Signup);
router.post("/login", login);
router.post("/me", me);

module.exports = router;

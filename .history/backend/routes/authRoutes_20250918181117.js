const express = require("express");
const router = express.Router();

const { Signup, login, getCurrentUser } = require("../controllers/authController");
const signupSchemaValidation = require("../middleware/shcemaValidation");
const { validateSchema } = require("../middleware/schemaValidationCheck");

router.post("/signup", validateSchema(signupSchemaValidation), Signup);
router.post("/login", login);
router.post("/logu", login);
router.get("/me", getCurrentUser);

module.exports = router;

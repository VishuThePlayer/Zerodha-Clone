const express = require("express");
const router = express.Router();

const { Signup, login, getCurrentUser, logout } = require("../controllers/authController");
const signupSchemaValidation = require("../middleware/shcemaValidation");
const { validateSchema } = require("../middleware/schemaValidationCheck");

router.post("/signup", validateSchema(signupSchemaValidation), Signup);
router.post("/lLogin", login);
router.post("/logout", logout);
router.get("/me", getCurrentUser);

module.exports = router;

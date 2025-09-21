const Joi = require("joi");

const signupSchemaValidation = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.st().min(10).integer().required().strict()
});

module.exports = signupSchemaValidation;

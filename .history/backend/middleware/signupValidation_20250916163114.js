const Joi = require('joi');


module.exports.signupValidation = Joi.object({
    email,
    firstName,
    las
})
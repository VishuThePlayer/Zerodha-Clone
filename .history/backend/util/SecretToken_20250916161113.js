require("dotenv").require();

const jwt = require('jsonwebtoken');

module.exports.createSecretToken = (id) =>{
    return jwt.sign({id}, )
} 
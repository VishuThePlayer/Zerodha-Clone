require("dotenv").require();

const jwt = require('jsonwebtoken');

module.exports.createSecretToken = (id) =>{
    return (
        jwt.sign({
  data: 'foobar'
}, 'secret', { expiresIn: 60 * 60 });
    )
} 
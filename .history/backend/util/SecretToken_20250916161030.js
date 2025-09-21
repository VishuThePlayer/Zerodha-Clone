require("dotenv").require();

const jwt = require('jsonwebtoken');

module.exports.createSecretToken = (id) =>{
    return {
}, 'secret', { expiresIn: 60 * 60 });

    }
} 
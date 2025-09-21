const {model} = require('mongoose');
const {UserSchema  = require('../schemas/UserSchema');

module.exports.userModel = model('user', UserSchema);

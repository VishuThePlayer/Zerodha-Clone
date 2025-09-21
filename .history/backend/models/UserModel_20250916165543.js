const {model} = require('mongoose');
const { default:UserSchema } = require('../schemas/UserSchema');

module.exports.userModel = model('user', UserSchema);

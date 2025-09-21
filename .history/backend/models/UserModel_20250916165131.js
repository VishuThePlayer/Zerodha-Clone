const {Model} = require('mongoose');
const { default: UserSchema } = require('../schemas/UserSchema');

module.exports.userModel = Model('user', UserSchema);

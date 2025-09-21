const {Model} = require('mongoose');
const { default: UserSchema } = require('../schemas/UserSchema');

module.export.userModel = Model('user', UserSchema);

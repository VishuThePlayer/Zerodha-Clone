const {Model} = require('mongoose');
const { default: UserSchema } = require('../schemas/UserSchema');

export.userModel = Model('user', UserSchema);

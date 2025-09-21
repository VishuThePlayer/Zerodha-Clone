const {Model} = require('mongoose');
const { default: UserSchema } = require('../schemas/UserSchema');

const userModel = Model('user', UserSchema);

e
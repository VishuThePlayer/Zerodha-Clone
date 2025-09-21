const {Model} = require('mongoose');
const { default: UserSchema } = require('../schemas/UserSchema');

expuserModel = Model('user', UserSchema);

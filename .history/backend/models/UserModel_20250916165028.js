const {Model} = require('mongoose');
const { default: UserSchema } = require('../schemas/UserSchema');

expiortuserModel = Model('user', UserSchema);

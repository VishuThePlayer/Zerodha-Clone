const {Model} = require('mongoose');
const { default: UserSchema } = require('../schemas/UserSchema');

exportyuserModel = Model('user', UserSchema);

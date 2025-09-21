const {Model} = require('mongoose');
const { default: UserSchema } = require('../schemas/UserSchema');

euserModel = Model('user', UserSchema);

const {Model} = require('mongoose');
const { default: UserSchema } = require('../schemas/UserSchema');

export.nmuserModel = Model('user', UserSchema);

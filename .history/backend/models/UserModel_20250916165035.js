const {Model} = require('mongoose');
const { default: UserSchema } = require('../schemas/UserSchema');

moduexport.userModel = Model('user', UserSchema);

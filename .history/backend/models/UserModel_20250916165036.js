const {Model} = require('mongoose');
const { default: UserSchema } = require('../schemas/UserSchema');

modulexport.userModel = Model('user', UserSchema);

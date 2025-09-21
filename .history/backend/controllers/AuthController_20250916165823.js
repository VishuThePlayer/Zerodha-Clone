const { userModel } = require("../models/UserModel");
const mongoose = require('mongoose');

module.exports.Signup = async (req, res, next) => {
    try {
        console.log(req.body);
        let result = new userModel(req.body);
        await result.save();
    } catch (error) {
        console.log(error);
    }
}
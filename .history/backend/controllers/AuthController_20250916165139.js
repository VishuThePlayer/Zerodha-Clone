const { userModel } = require("../models/UserModel");


module.exports.Signup = async (req, res, next) => {
    try {
        console.log(req.body);
        await userModel()
    } catch (error) {
        console.log(error);
    }
}
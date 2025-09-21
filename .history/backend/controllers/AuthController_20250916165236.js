const { userModel } = require("../models/UserModel");


module.exports.Signup = async (req, res, next) => {
    try {
        console.log(req.body);
        let result = userModel(req.body);
        await res
    } catch (error) {
        console.log(error);
    }
}
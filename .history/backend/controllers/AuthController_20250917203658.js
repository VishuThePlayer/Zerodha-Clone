const User = require("../models/UserModel");
const bcrypt =
const { createSecretToken } = require("../util/SecretToken");

module.exports.Signup = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const validationError = newUser.validateSync();

    if (validationError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationError.errors,
      });
    }

    const savedUser = await newUser.save();

    // ✅ Generate token
    const token = createSecretToken(savedUser._id);

    // ✅ Cookie set — SIMPLE
    res.cookie("token", token, {
      httpOnly: true,   // JS se access nahi hoga (secure)
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully!",
      data: {
        _id: savedUser._id,
        email: savedUser.email,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        username: savedUser.username,
        phone: savedUser.phone,
      },
      token, // Debug ke liye rakh sakte ho (frontend me use karoge to optional)
    });

  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        success: false,
        message: `${field} already exists`,
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports.login = async(req, res) => {
  const {email, pass} = req.body;
  if(!email || !pass){
    return res.json{message: "All fields are required"};
  } 

  try {
    const user = await User.find({email});
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    } 
    
    const auth = await bcrypt


  } catch (error) {
    
  }
}

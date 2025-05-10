const bcrypt = require('bcryptjs');
const userModel = require('../models/User'); // Add this missing import

async function userSignUpController(req, res) {
    try {
        const { name, email, password } = req.body;

        const user = await userModel.findOne({email})
        if(user){
            return res.status(400).json({message: "Email already exists."})
        }
        
        if (!email) {
            throw new Error("Please provide email"); // Fixed capitalization of Error
        }
        if (!password) {
            throw new Error("Please provide password"); // Fixed error message
        }
        if (!name) {
            throw new Error("Please provide name"); // Fixed error message
        }
        
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        
        if(!hashPassword){
            throw new Error("Password hashing failed");
        }
        
        const payload = {
            ...req.body,
            role : "General",
            password: hashPassword
        };
        
        const userData = new userModel(payload);
        const saveUser = await userData.save(); // Added await here
        
        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created Successfully!"
        });
    }
    catch (err) {
        res.status(400).json({ // Added status code for error
            message: err.message, // Changed to err.message to get the actual error string
            error: true,
            success: false,
        });
    }
}

module.exports = userSignUpController;
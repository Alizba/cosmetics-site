const bcrypt = require('bcryptjs');
const userModel = require('../models/User');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;
        
        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }
        
        const user = await userModel.findOne({ email });
        
        if (!user) {
            throw new Error("User not found");
        }
        
        const checkPassword = await bcrypt.compare(password, user.password);
        console.log("CheckPassword", checkPassword);
        
        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
            };
            
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '1h' });
            
            const tokenOption = {
                httpOnly: true,
                secure: true
            };
            
            // Set the cookie and send the response once
            res.cookie("token", token, tokenOption).status(200).json({
                message: "Login successful",
                user: {
                    id: user._id,
                    email: user.email,
                    // Include any other user fields you want to return
                    // but NOT the password
                },
                token: token, // Optionally include token in response body
                error: false,
                success: true
            });
        } else {
            throw new Error("Invalid password");
        }
    }
    catch (err) {
        res.status(400).json({
            message: err.message,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignInController;
// controllers/userController.js
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register user
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Login user
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if both email and password are provided
        if (!email || !password) {
            return res.status(400).json({ error: 'Please provide email and password' });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Compare the entered password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return the token to the client
        return res.status(200).json({
            message: 'Login successful',
            token,
        });
    } catch (error) {
        console.error('Server error during login:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

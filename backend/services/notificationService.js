const nodemailer = require('nodemailer');
const User = require('../models/user.js');  // Assuming User model exists

// Send email notification
exports.sendEmailNotification = async (userEmail, subject, message) => {
    try {
        // Set up nodemailer transporter
        let transporter = nodemailer.createTransport({
            service: 'gmail', // Or use any other SMTP service
            auth: {
                user: process.env.EMAIL_USER, // Email from .env file
                pass: process.env.EMAIL_PASS  // Password from .env file
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: subject,
            text: message
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent to:', userEmail);
    } catch (error) {
        console.error('Error sending email notification:', error);
    }
};

// Send in-app notification
exports.sendInAppNotification = async (userId, message) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            console.error('User not found');
            return;
        }

        // Assuming there's a notification field in the User schema
        user.notifications.push({ message, date: new Date() });
        await user.save();
        console.log('In-app notification sent to:', user.email);
    } catch (error) {
        console.error('Error sending in-app notification:', error);
    }
};

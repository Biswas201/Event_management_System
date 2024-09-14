const nodemailer = require('nodemailer');

const sendReminderEmail = (email, eventDetails) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Reminder for ${eventDetails.name}`,
        text: `This is a reminder for the event "${eventDetails.name}" on ${eventDetails.date}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log(error);
        else console.log('Email sent: ' + info.response);
    });
};

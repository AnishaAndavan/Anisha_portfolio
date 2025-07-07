const nodemailer = require('nodemailer');
const Message = require('../models/Message'); // Your existing schema

exports.sendContactMail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // ✅ 1. Save to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // ✅ 2. Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,            // Your Gmail
        pass: process.env.MY_EMAIL_PASSWORD,   // App password
      },
    });

    // ✅ 3. Mail content
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.MY_EMAIL}>`,
      to: process.env.MY_EMAIL,
      subject: `📩 New message from ${name}`,
      html: `
        <h2>You got a new message from your portfolio!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <hr>
        <p style="font-size: 12px; color: gray;">This message was sent from your portfolio contact form.</p>
      `,
    };

    // ✅ 4. Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message saved and email sent!' });
  } catch (err) {
    console.error('Error sending message or email:', err);
    res.status(500).json({ success: false, message: 'Failed to process message.' });
  }
};

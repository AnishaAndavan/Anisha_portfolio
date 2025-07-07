const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const Message = require('./models/Message');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err));

// ✅ POST /contact — Save & Send Email
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1️⃣ Save to MongoDB
    await Message.create({ name, email, message });

    // 2️⃣ Send Email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD, // App password, not regular password
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.MY_EMAIL}>`,
      to: process.env.MY_EMAIL, // Send to yourself
      subject: `📩 New Message from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <hr>
        <p style="font-size: 12px; color: gray;">Sent from your portfolio site</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message saved and email sent' });
  } catch (err) {
    console.error('Error saving message or sending email:', err);
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
});

// ✅ Start Server
app.listen(5000, () => console.log('Server running on port 5000'));

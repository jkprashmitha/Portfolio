const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const router = express.Router();

function createTransporter() {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  } else {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }
}

router.post('/',
  body('name').isString().isLength({ min: 2 }),
  body('email').isEmail(),
  body('message').isString().isLength({ min: 10 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, message } = req.body;

    try {
      const transporter = createTransporter();
      const receiver = process.env.CONTACT_RECEIVER || process.env.EMAIL_USER;

      const info = await transporter.sendMail({
        from: `${name} <${email}>`,
        to: receiver,
        subject: `New contact form message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g,'<br>')}</p>`
      });

      return res.json({ ok: true, messageId: info.messageId || null });
    } catch (err) {
      console.error('Error sending email:', err);
      return res.status(500).json({ error: 'Failed to send email', details: err.message });
    }
  }
);

module.exports = router;

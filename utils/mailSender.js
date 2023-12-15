const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_HOST_USER,
    pass: process.env.EMAIL_HOST_PASSWORD,
  },
});

/** 
    @param {string} subject - subject of the email
    @param {string} recipient - recipient of the email
    @param {string} html - html content of the email
*/
const sendEmail = async (subject, recipient, html) => {
  return new Promise((resolve, reject) => {
    try {
      const mailOptions = {
        from: process.env.EMAIL_HOST_USER,
        to: recipient,
        subject,
        html,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(`Error from mailSender ${error}`);
          reject(error);
        } else {
          console.log(`Email sent: ${info.response}`);
          resolve(info);
        }
      });
    } catch (error) {
      console.error(`Error from mailSender ${error}`);
      reject(error);
    }
  });
};

module.exports = sendEmail;

const Form = require("../models/FormModel.js");
const sendEmail = require("../utils/mailSender.js");
const path = require("path");

const test = (req, res) => {
  res.send("Hello from test!");
};

// accept form data
const acceptForm = async (req, res) => {
  try {
    const { name, email, contactNumber } = req.body;
    console.log("req.body: ", req.body);

    const form = new Form({ name, email, contactNumber });
    await form.save();

    // send email to user
    const subject = "Thank you for your submission!";
    const recipient = email;
    const html = emailContent(name, email, contactNumber);
    await sendEmail(subject, recipient, html);

    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("error in acceptForm: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const emailContent = (name, email, contactNumber) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            .container {
                width: 80%;
                margin: auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 5px;
                background-color: #f9f9f9;
            }
            h1 {
                color: #444;
            }
            p {
                color: #666;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Form Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact Number:</strong> ${contactNumber}</p>
            <p>Thank you for your submission. We will get back to you soon.</p>
        </div>
    </body>
    </html>
  `;
};

// return contact form
const renderContactForm = (req, res) => {
  const filePath = path.join(__dirname, "..", "views", "contact.html");
  res.sendFile(filePath);
};

module.exports = {
  test,
  acceptForm,
  renderContactForm,
};

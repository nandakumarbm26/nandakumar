// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  // create transporter object using SMTP transport
  var data = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL, // use environment variable for email
      pass: process.env.ADMIN_PASS, // use environment variable for password
    },
  });

  // setup email data with unicode symbols
  const mailOptionsLead = {
    from: process.env.ADMIN_EMAIL,
    to: "nanda262001@gmail.com",
    subject: "Contact lead from website",
    text: `name : ${data.name}\nphone : ${data.phone}\nemail : ${data.email}\nmessage: ${data.msg}`,
  };
  const mailOptionsCust = {
    from: process.env.ADMIN_EMAIL,
    to: data.email,
    subject: "Thank you for requesting for Contact.",
    text: `Dear ${data.name},\n\nI wanted to take a moment to thank you for reaching out to us through our contact form. I appreciate the time and effort you took to get in touch with us.\n\nWe have received your message and we will do our best to respond to your inquiry as soon as possible.\n\nIn the meantime, if you have any further questions or concerns, please don\u0027t hesitate to reach out to us. I\u0027m always here to help.\n\nOnce again, thank you for your interest. I look forward to speaking with you soon.\n\n\nBest regards,\nNanda Kumar B M\n    `,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptionsCust, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve("Email sent: " + info.response);
      }
    });
  });
  // send mail with defined transport object
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptionsLead, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve("Email sent: " + info.response);
      }
    });
  });
  return res.status(200).json({ status: "OK" });
}

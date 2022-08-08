const nodemailer = require('nodemailer')

const sendEmail = mailOptions => {
    var transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "e115a72415df26",
        pass: "0cfc39648684d9"
        // host: process.env.SMTP_HOST,
        // port: process.env.SMTP_PORT,
        // auth: {
        //   user: process.env.SMTP_USER,
        //   pass: process.env.SMTP_PASS
        }
      });

      transport.sendMail({
        from: mailOptions.from,
        to: mailOptions.to,
        subject: mailOptions.subject,
        text: mailOptions.text,
        html: mailOptions.html
    })
}

module.exports = sendEmail
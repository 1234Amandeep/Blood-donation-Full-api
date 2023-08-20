const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "a.d.scr71234discord@gmail.com",
    pass: "xoufcvsrnrwjigib",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(res) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    // from: "a.d.scr71234discord@gmail.com",
    from: '"Nodemailer" <a.d.scr71234discord@gmail.com>', // sender address
    to: "a.d.scr71234@gmail.com", // list of receivers
    subject: "Form Data", // Subject line
    text: "Data coming from server is given below", // plain text body
    html: `<h4>Name : ${res.name}</h4>
          <h4>Email : ${res.email}</h4> 
          <h4>Blood : ${res.bloodGroup}</h4>`, // html body
  });

  console.log("Message sent:", info.messageId);
}

module.exports = main;

const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express.Router();

app.post('/mail', function (req, res, next) {
  nodemailer.createTestAccount((err, info) => {
    const htmlEmail = `
        <h3>Contact detail</h3>
        <ul>
        <li>Name:${req.body.name}</li>
        <li>Email:${req.body.email}</li>
        
        </ul>
        <h3>Message</h3>
        <p>${req.body.msg}</p>
     
        
       
        `;

    var transport = nodemailer.createTransport({
      // service: 'gmail',
      // host: 'smtp.gmail.com',
      // port: 587,
      // secure: false,
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        // user: 'muqadasshaban@gmail.com',
        // pass: 'momina20',
        user: 'muqaddasshaaban@gmail.com',
        pass: 'vejulrhditiysqds',
      },
    });

    var mailoption = {
      from: req.body.name,
      to: 'muqaddasshaaban@gmail.com',
      subject: 'New msg',
      rec: req.body.email,
      text: req.body.msg,
      html: htmlEmail,
    };
    transport.sendMail(mailoption, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log('mail sent!' + info.response);
      }
    });
  });
});

module.exports = app;

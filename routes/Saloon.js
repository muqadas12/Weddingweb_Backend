const express = require('express');
const saloonSchema = require('../Models/SaloonBooking');
const saloonController = require('../Controllers/SaloonBooking');
const app = express.Router();

app.post('/saloon', saloonController.SaloonBooking);
app.get('/get-Saloonservices', function (req, res, next) {
  console.log(req.query.email, 'im email of get');
  saloonSchema
    .find({ email: req.query.email })
    .then((data) => {
      console.log(data, 'from dealer servicessssssssssss');
      res.status(200).send({
        functionDate: data.map((c) => c.functionDate),
        functionTime: data.map((c) => c.functionTime),
        makeupType: data.map((c) => c.makeupType),
        email: data.map((c) => c.email),
        serviceName: data.map((c) => c.serviceName),
        price: data.map((c) => c.price),
        serviceCategory: data.map((c) => c.serviceCategory),
      });
    })
    .catch((err) => {
      return res.status(500).send({
        Message: 'Unable to get. Please Try later.',
        err,
      });
    });
});
app.get('/get-saloon-services', function (req, res, next) {
  saloonSchema
    .find({ dealerEmail: req.query.email })
    .then((datas) => {
      // console.log(data);

      res.status(200).send({
        datas,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        Message: 'Unable to get. Please Try later.',
        err,
      });
    });
});
app.get('/get-saloon-services-customer', function (req, res, next) {
  saloonSchema
    .find({ email: req.query.email })
    .then((datas) => {
      // console.log(data);

      res.status(200).send({
        datas,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        Message: 'Unable to get. Please Try later.',
        err,
      });
    });
});
module.exports = app;

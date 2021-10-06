const express = require('express');
const saloonSchema = require('../Models/SaloonBooking');
const bodyParser = require('body-parser');
const app = express.Router();

const SaloonBooking = async (req, res, next) => {
  const {
    functionDate,
    functionTime,
    makeupType,
    email,
    serviceName,
    price,
    dealerEmail,
  } = req.body;
  console.log(
    functionDate,
    functionTime,
    makeupType,
    email,
    serviceName,
    price,
    dealerEmail
  );

  const saloonfunBooking = new saloonSchema({
    functionDate,
    functionTime,
    makeupType,
    email,
    serviceName,
    price,
    dealerEmail,
  });
  saloonfunBooking
    .save()
    .then((saveData) => {
      console.log(saveData);
      res.status(201).json({ saloonBookingData: saveData });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { SaloonBooking };

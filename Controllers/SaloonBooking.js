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
    serviceCategory,
  } = req.body;
  console.log(
    functionDate,
    functionTime,
    makeupType,
    email,
    serviceName,
    serviceCategory
  );

  const saloonfunBooking = new saloonSchema({
    functionDate,
    functionTime,
    makeupType,
    email,
    serviceName,
    serviceCategory,
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

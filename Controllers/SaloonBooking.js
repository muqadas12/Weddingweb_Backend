const express = require("express");
const saloonSchema = require("../Models/SaloonBooking");
const bodyParser = require("body-parser");
const app = express.Router();

const SaloonBooking = async (req, res, next) => {
  const { functionDate, functionTime, makeupType } = req.body;
  console.log(functionDate, functionTime, makeupType);

  const saloonfunBooking = new saloonSchema({
    functionDate,
    functionTime,
    makeupType,
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

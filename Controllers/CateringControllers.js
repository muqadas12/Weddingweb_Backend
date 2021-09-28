const express = require('express');
const CateringSchema = require('../Models/CateringModel');
const bodyParser = require('body-parser');
const app = express.Router();

const CateringBooking = async (req, res, next) => {
  const {
    functionDate,
    functionTime,
    functionType,

    numOfPeople,
    email,
    serviceName,
    serviceCategory,
  } = req.body;
  console.log(
    functionDate,
    functionTime,
    numOfPeople,
    functionType,
    email,
    serviceName,
    serviceCategory
  );

  const cateringBooking = new CateringSchema({
    functionDate,
    functionTime,
    numOfPeople,
    functionType,
    email,
    serviceName,
    serviceCategory,
  });
  cateringBooking
    .save()
    .then((saveData) => {
      console.log(saveData);
      res.status(201).json({ cateringBookingData: saveData });
    })
    .catch((res) => {
      console.log(res);
    });
};

// const getCateringService=

module.exports = { CateringBooking };

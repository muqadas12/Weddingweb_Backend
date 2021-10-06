const express = require('express');
const CarRentalSchema = require('../Models/CarRental');
const bodyParser = require('body-parser');
const app = express.Router();

/***
 * @typedef {Object} carRentalBookingData
 * @property {string} functionDate - What the functiondate is
 * @param {string} functionDate Date for which function is held
 * @param {string} functionTime Time of the functon
 * @param {string} numOfPeople  number of peoples goings to attend that function
 * @returns {Object} return object of array as a result
 *
 */
const CarsBooking = async (req, res, next) => {
  const {
    functionDate,
    functionTime,
    numOfPeople,
    email,
    price,
    serviceName,
    dealerEmail,
    carType,
  } = req.body;
  console.log(
    functionDate,
    functionTime,
    numOfPeople,
    email,
    price,
    serviceName,
    dealerEmail,
    carType
  );

  const carRentalBooking = new CarRentalSchema({
    functionDate,
    functionTime,
    numOfPeople,
    email,
    price,
    serviceName,
    dealerEmail,
    carType,
  });
  carRentalBooking
    .save()
    .then((saveData) => {
      console.log(saveData);
      res.status(201).json({ carRentalBookingData: saveData });
    })
    .catch((res) => {
      console.log(res);
    });
};

module.exports = { CarsBooking };

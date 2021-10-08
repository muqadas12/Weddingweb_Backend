const bookingSchema = require('../Models/Booking');
const bodyParser = require('body-parser');
const express = require('express');

/**
 * @typedef {Object} bookedhallData
 * @property {string} name - BookingHall
 * @property {('functionDate' | 'functionTime' | 'functionType' | 'numOfPeople')} type - The hall Form properties
 */
const app = express();
/**
 *This is function which will save data in database
 *
 */
const booking = async (req, res, next) => {
  const {
    functionDate,
    functionTime,
    functionType,
    numOfPeople,
    email,
    serviceName,
    price,
    dealerEmail,
  } = req.body;
  console.log(
    functionDate,
    functionTime,
    functionType,
    numOfPeople,
    email,
    serviceName,
    price,
    dealerEmail
  );

  const booked = new bookingSchema({
    functionDate,
    functionTime,
    functionType,
    numOfPeople,
    email,
    serviceName,
    price,
    dealerEmail,
  });
  booked
    .save()
    .then((savedData) => {
      console.log(savedData);

      res.status(201).json({ bookedhallData: savedData });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { booking };

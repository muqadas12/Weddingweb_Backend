const express = require('express');
const PhotographySchema = require('../Models/Photography');
const bodyParser = require('body-parser');
const app = express.Router();

const PhotoshootBooking = async (req, res, next) => {
  const {
    functionDate,
    functionTime,
    photographyType,
    email,
    serviceName,
    price,
    dealerEmail,
  } = req.body;
  console.log(
    functionDate,
    functionTime,
    photographyType,
    email,
    serviceName,
    price,
    dealerEmail
  );

  const photographyBooking = new PhotographySchema({
    functionDate,
    functionTime,
    photographyType,
    email,
    price,
    serviceName,
    dealerEmail,
  });
  photographyBooking
    .save()
    .then((saveData) => {
      console.log(saveData);
      res.status(201).json({ photographerBookingData: saveData });
    })
    .catch((res) => {
      console.log(res);
    });
};
module.exports = { PhotoshootBooking };

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
    serviceCategory,
  } = req.body;
  console.log(
    functionDate,
    functionTime,
    photographyType,
    email,
    serviceName,
    serviceCategory
  );

  const photographyBooking = new PhotographySchema({
    functionDate,
    functionTime,
    photographyType,
    email,
    serviceName,
    serviceCategory,
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

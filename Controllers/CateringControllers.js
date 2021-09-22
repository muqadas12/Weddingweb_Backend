const express = require("express");
const CateringSchema = require("../Models/CateringModel");
const bodyParser = require("body-parser");
const app = express.Router();

const CateringBooking = async (req, res, next) => {
  const { functionDate, functionTime, functionType, foodType, numOfPeople } =
    req.body;
  console.log(functionDate, functionTime, numOfPeople, functionType, foodType);

  const cateringBooking = new CateringSchema({
    functionDate,
    functionTime,
    numOfPeople,
    functionType,
    foodType,
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
module.exports = { CateringBooking };

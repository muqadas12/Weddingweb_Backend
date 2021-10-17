const express = require('express');
const carRentalController = require('../Controllers/CarRental');
const carRentalSchema = require('../Models/CarRental');
const app = express.Router();

app.post('/carRental', carRentalController.CarsBooking);
app.get('/view-car-rental-orders', (req, res, next) => {
  carRentalSchema
    .find({ email: req.query.email })

    .then((data) => {
      //   console.log(data);
      res.status(202).send({ data });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/view-car-rental-dealer-orders', function (req, res, next) {
  carRentalSchema
    .find({ dealerEmail: req.query.email })
    .then((data) => {
      // console.log(data);

      res.status(200).send({
        data,
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

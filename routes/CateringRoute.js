const express = require('express');
const cateringController = require('../Controllers/CateringControllers');
const CateringSchema = require('../Models/CateringModel');
const router = express.Router();
router.post('/booking', cateringController.CateringBooking);
/**
 * get catering return all booked service for catering
 */
router.get('/get-catering', function (req, res, next) {
  CateringSchema.find({ dealerEmail: req.query.email })
    .then((data) => {
      console.log(data);

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
router.get('/get-cateringservices', function (req, res, next) {
  console.log(req.query.email, 'im email of get');
  CateringSchema.find({ email: req.query.email })
    .then((data) => {
      console.log(data, 'from dealer servicessssssssssss');
      res.status(200).send({
        functionDate: data.map((c) => c.functionDate),
        functionTime: data.map((c) => c.functionTime),
        functionType: data.map((c) => c.functionType),
        foodType: data.map((c) => c.foodType),
        email: data.map((c) => c.email),
        serviceName: data.map((c) => c.serviceName),
        serviceCategory: data.map((c) => c.serviceCategory),

        numOfPeople: data.map((c) => c.numOfPeople),
      });
    })
    .catch((err) => {
      return res.status(500).send({
        Message: 'Unable to get. Please Try later.',
        err,
      });
    });
});
module.exports = router;

const express = require('express');
const bookingHall = require('../Controllers/BookingHall');
const bookingHallSchema = require('../Models/Booking');
const router = express.Router();
router.post('/booking-hall', bookingHall.booking);
router.get('/get-booking-hall-customer-order', function (req, res) {
  bookingHallSchema
    .find({ email: req.query.email })
    .then((data) => {
      res.status(200).send({ data });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get('/get-hall-orders-dealers', (req, res, next) => {
  bookingHallSchema
    .find({ dealerEmail: req.query.email })

    .then((data) => {
      // console.log(data);
      console.log(req.query.email, 'my photogrphy email');

      res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

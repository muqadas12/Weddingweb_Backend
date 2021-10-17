const express = require('express');
const bookingHall = require('../Controllers/Bookinghall');
const hallSchema = require('../Models/Booking');
const router = express.Router();
router.post('/booking-hall', bookingHall.booking);

router.get('/get-hall-orders-dealers', (req, res, next) => {
  hallSchema
    .find({ dealerEmail: req.query.email })

    .then((dataH) => {
      console.log(dataH);
      res.status(202).send({ dataH });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;

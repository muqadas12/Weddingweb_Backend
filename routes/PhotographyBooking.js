const express = require('express');
const photographyController = require('../Controllers/PhotographyBooking');
const photographySchema = require('../Models/Photography');
const router = express.Router();

router.post('/booking', photographyController.PhotoshootBooking);
router.get('/get-photography-orders', (req, res, next) => {
  photographySchema
    .find({ email: req.query.email })
    .then((data) => {
      console.log(data);
      res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get('/get-photography-orders-dealers', (req, res, next) => {
  photographySchema
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

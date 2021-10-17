const express = require('express');
const hallController = require('../Controllers/Hall');
const hallscheam = require('../Models/Hall');
const router = express.Router();

router.get('/gethalls', hallController.getData);

router.get('/get-hall-orders-dealers', (req, res, next) => {
  hallscheam
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

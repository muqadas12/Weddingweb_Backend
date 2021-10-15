const express = require('express');
const bookingHall = require('../Controllers/Bookinghall');
const router = express.Router();
router.post('/booking-hall', bookingHall.booking);

module.exports = router;

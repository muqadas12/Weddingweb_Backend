const express = require("express");
const bookingHall = require("../Controllers/BookingHall");
const router = express.Router();
router.post("/booking-hall", bookingHall.booking);

module.exports = router;

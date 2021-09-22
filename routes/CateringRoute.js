const express = require("express");
const cateringController = require("../Controllers/CateringControllers");
const router = express.Router();
router.post("/booking", cateringController.CateringBooking);

module.exports = router;

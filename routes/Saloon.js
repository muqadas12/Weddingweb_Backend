const express = require("express");
const saloonController = require("../Controllers/SaloonBooking");
const app = express.Router();

app.post("/saloon", saloonController.SaloonBooking);

module.exports = app;

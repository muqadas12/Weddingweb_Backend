const express=require('express');
const carRentalController=require('../Controllers/CarRental');
const app=express.Router();

app.post('/carRental',carRentalController.CarsBooking)

module.exports=app
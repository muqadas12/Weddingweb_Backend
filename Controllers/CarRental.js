const express=require('express');
const CarRentalSchema=require('../Models/CarRental');
const bodyParser=require('body-parser')
const app=express.Router();

const CarsBooking=async(req,res,next)=>{
    const{functionDate,functionTime,numOfPeople}=req.body;
    console.log(functionDate,functionTime,numOfPeople);

    const carRentalBooking=new CarRentalSchema({
        functionDate,
        functionTime,
        numOfPeople
    })
    carRentalBooking.save().then(saveData=>{
        console.log(saveData)
        res.status(201).json({carRentalBookingData:saveData})
    })
    .catch(res=>{
        console.log(res)
    })
}
module.exports={CarsBooking}
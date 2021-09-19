const express=require('express');
const photographyController=require('../Controllers/PhotographyBooking');
const router=express.Router();

router.post('/booking',photographyController.PhotoshootBooking)

module.exports=router;

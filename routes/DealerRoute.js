const express=require('express');
const path=require('path');
 const multer=require('multer');
const fs=require('fs');
const dealerservices=require('../Models/Dealer');

const app=express();
app.use('/static',express.static('uploadFiles'))

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name:'dpt9qa7ms',
    api_key:'755591287886294',
    api_secret:'***************************'	

});
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploadFiles');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
  }
   const uploads = multer({ storage: storage});

  const postDealerdata=  app.post('/post-dealers',uploads.single('image'),async(req,res,next)=>{
   
     
      var dealer=  new dealerservices;
      
      dealer.serviceName=req.body.serviceName;
      dealer.dealerservice=req.body.dealerservice;
      dealer.description=req.body.description;
      dealer.price=req.body.price;

      dealer.pathImg='http://localhost:2000/static/'+req.file.filename;
    
      
       
console.log(dealer.pathImg)
      
      dealer.img.contentType = 'image/png';
      dealer.save((err, result) => {
          console.log(result)
  
          if (err) return console.log(err)
          console.log('saved to database')
          res.send(dealer);
      })


  })

  const getDealerdata=app.get('/get-dealers',function(req,res,next){
    dealerservices.find().then(data => {
        res.status(200).send({ data });
    })
        .catch(err => {
            return res.status(500).send({
                Message: 'Unable to get. Please Try later.',
                err,
            });
        });

  })




  module.exports={getDealerdata,postDealerdata}
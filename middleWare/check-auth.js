 const jwt = require('jsonwebtoken');
 module.exports=(req,res,next)=>{
     try{
        var token=req.body.token.split("")[1];
        console.log(token);
        next();


     }
     catch(err){
         res.status(401).json();
         error:'Auth fail'
     }
 
 


    }
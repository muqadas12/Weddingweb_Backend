const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true

    },
    address:{
        type:String,
        required:true

    },
    
    
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true

        // default:"customer",
        
        // enum: ["customer", "dealer"],
        // // required:true
    }
})
module.exports=mongoose.model('User',userSchema);
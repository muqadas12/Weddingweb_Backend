const cloudinary=require('cloudinary').v2;

cloudinary.config({
    cloud_name:'dpt9qa7ms',
    api_key:'755591287886294',
    api_secret:'***************************'	

});


module.exports={cloudinary}
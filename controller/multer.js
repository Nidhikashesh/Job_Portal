// var path = require('path');
var multer = require("multer");

const storage = multer.diskStorage({

destination:function(req,file,cb){
    return cb(null,"./uploads")
},

filename:(req,file,cb)=>{
cb(null,`${Date.now()}${file.originalname}`);
}

});

var upload = multer({storage});
module.exports=upload;
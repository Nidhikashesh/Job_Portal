var posts=require("../models/jobPostModel");
exports.authenticate= async function(req, res, next) {
   if(!req.session.user){
    return res.redirect("/");
   } 
   const Posts= await posts.find().sort({createdAt:-1});
   res.render("dashboard",{user:req.session.user,Posts})
   
}

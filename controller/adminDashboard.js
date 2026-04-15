var jobPosts=require("../models/jobPostModel");
exports.auth = async function (req, res, next) {
    
        if (!req.session.admin) {
            return res.redirect("/admin-login");
        }
    const Posts=await jobPosts.find().sort({createdAt:-1});
    res.render('admin',{Posts});
}

exports.logout = (req, res) => {
   req.session.destroy();
  res.redirect("/");
};

var jobPosts=require("../models/jobPostModel");
exports.authenticate= async function(req, res, next) {
   if(!req.session.user){
    return res.redirect("/");
   } 
   
   try {
        const search = req.query.search || "";

        const query = {
            $or: [
                { companyName: { $regex: search, $options: "i" } },
                { jobRole: { $regex: search, $options: "i" } }
            ]
        };

        const Posts = await jobPosts.find(query).sort({ createdAt: -1 });

        res.render("dashboard",{user:req.session.user,Posts,search});

    } catch (err) {
        console.log(err);

        res.send("Error loading jobs");
    }
}

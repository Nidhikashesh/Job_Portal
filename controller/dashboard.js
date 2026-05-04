var jobPosts=require("../models/jobPostModel");

exports.authenticate= async function(req, res, next) {
   if(!req.session.user){
    return res.redirect("/");
   } 
   
      try {
        const { search, sector, jobType, qualification, experience } = req.query;

        let query = {};

        // 🔍 Search (company OR role)
        if (search) {
            query.$or = [
                { companyName: { $regex: search, $options: "i" } },
                { jobRole: { $regex: search, $options: "i" } }
            ];
        }

        // 🎯 Filters (only apply if selected)
        if (sector) {
            query.sector = sector;
        }

        if (jobType) {
            query.jobType = jobType;
        }

        if (qualification) {
            query.qualification = { $regex: qualification, $options: "i" };
        }

        if (experience) {
            query.experience = { $regex: experience, $options: "i" };
        }

        const Posts = await jobPosts.find(query).sort({ createdAt: -1 });

        res.render("dashboard", {
            user:req.session.user,
            Posts,
            search,
            filters: { sector, jobType, qualification, experience }
        });

    } 
   catch (err) {
        console.log(err);

        res.send("Error loading jobs");
    }

}
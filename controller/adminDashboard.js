var jobPosts=require("../models/jobPostModel");
exports.auth = async function (req, res, next) {
    
        if (!req.session.admin) {
            return res.redirect("/admin-login");
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

        res.render("admin", { Posts, search });

    } catch (err) {
        console.log(err);
        res.send("Error loading jobs");
    }
}


exports.logout = (req, res) => {
   req.session.destroy();
  res.redirect("/");
};

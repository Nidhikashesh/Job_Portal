let Job=require("../models/jobPostModel");
// POST - Create Job
let CreateJob= async (req, res) => {
    try {
        const job = new Job({
            companyName: req.body.companyName,
            jobRole: req.body.jobRole,
            companyLogo: req.file.filename ,
            sector: req.body.sector,
            jobType: req.body.jobType,
            qualification: req.body.qualification,
            experience: req.body.experience,
            location: req.body.location,
            startDate: req.body.startDate,
            lastDate: req.body.lastDate,
            description: req.body.description,
            applyLink: req.body.applyLink
        });

        await job.save();
        await req.flash("success","Job posted Successfully ✅ ");
        res.redirect("/admin"); // back to admin panel

    } catch (err) {
        console.log(err);
        res.send("Error creating job");
    }
};

module.exports=CreateJob;
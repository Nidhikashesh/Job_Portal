// READ or View post
var jobPosts=require("../models/jobPostModel");

exports.view=async (req, res) => {
  try {
    const post = await jobPosts.findById(req.params.id);
    if (!post) return res.status(404).send("Not found");
    res.render('jobDetails', { post });

  } catch (error) {
    res.status(500).send(error);
  }
};

//get edit page
exports.getEdit = async (req, res) => {
    try {
        const job = await jobPosts.findById(req.params.id);
        res.render("editJob", { job });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
 // UPDATE JOB
 exports.edit= async (req, res) => {
    try {
        const { description, lastDate } = req.body;

        const updatedJob = await jobPosts.findByIdAndUpdate(
            req.params.id,
            {
                description,
                lastDate
            },
            { new: true }
        );

        res.redirect("/admin"); // or wherever you want
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// DELETE JOB
exports.delete= async (req, res) => {
  try {
    await req.flash("error", "⚠️ Are you sure ? ");
    const id=req.params.id;
    await jobPosts.findByIdAndDelete(id);
    res.send( "Job deleted successfully" );
  } catch (err) {
    res.status(500);
  }
};

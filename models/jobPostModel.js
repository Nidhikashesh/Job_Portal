const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    companyName: String,
    jobRole: String,
    companyLogo: String,
    sector: String,
    jobType: String,
    qualification: String,
    experience: String,
    location: String,
    startDate: String,
    lastDate: String,
    description: String,
    applyLink: String
}, { timestamps: true });

let job= mongoose.model("Job", jobSchema);

module.exports =job;
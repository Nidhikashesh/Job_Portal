const mongoose = require("mongoose");
const DB_URL=process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("MongoDB Connected");
  } 
  catch (error) {
    console.error("Database connection error:", error);
    
  }
};

module.exports = connectDB;

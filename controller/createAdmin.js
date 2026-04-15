// // we don't need this route ..Admin is created successfuly

// const bcrypt = require("bcrypt");
// const Admin = require("../models/AdminModel");

// let createAdmin= async (req, res) => {

//     const hashedPassword = await bcrypt.hash("admin123", 10);

//     const admin = new Admin({
//         email: "",
//         password: hashedPassword
//     });

//     await admin.save();

//     res.send("Admin Created");

// };
// module.exports =createAdmin;


// admin get route -INDEX.js ROUTER

// var  createAdmin=require("../controller/createAdmin");
// router.get("/create-admin",createAdmin);

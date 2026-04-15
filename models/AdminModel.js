const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: "admin"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

let admin = mongoose.model("Admin", adminSchema);
if (admin) {
  console.log("admin schema created!");
}

module.exports = admin;
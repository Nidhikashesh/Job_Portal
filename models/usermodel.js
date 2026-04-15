let db = require("../config/DB");
let mongoose = require("mongoose");

/* user Schema */

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String, 
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

let Users = mongoose.model("Users", userSchema);
if (Users) {
  console.log("schema created!");
}

module.exports = Users;

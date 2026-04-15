const bcrypt = require("bcrypt");
const Admin = require("../models/AdminModel");

let adminLogin = async (req, res) => {
  const admin = await Admin.findOne({ email: req.body.email });

  if (!admin) {
    req.flash("error","You are not an Admin❌");
    return res.redirect("/admin-login");
  }

  const match = await bcrypt.compare(req.body.password, admin.password);

  if (!match) {
    req.flash("error", "Wrong password❌ please try again!");
    return res.redirect("/admin-login");
  }

  req.session.admin = admin;
  res.redirect("/admin");
};
module.exports = adminLogin;

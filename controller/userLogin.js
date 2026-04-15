const bcrypt = require("bcrypt");
var Users = require("../models/usermodel");

exports.signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    let newUser = new Users({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      image: req.file.filename,
    });

    //check user
    let existuser = await Users.findOne({ email: newUser.email });

    if (existuser) {
       req.flash("error","User already exist ❌ ");
       return res.redirect("/signup");
    } 
    else {
        await Users.insertMany(newUser);
        console.log("signed up successful");
        console.log(req.body);
        await req.flash("success","signup successful ✅ please go for login");
        res.redirect("/");
      }
    } catch (err) {
      console.log("Error Occurred", err);
    }
};



/*============== LOGIN ============== */

exports.login = async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  req.session.showLogin=true;

  if (!user) {
    
    req.flash("error","User not found ❌");
    return res.redirect("/");
  }


  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) {
    req.flash("error","Wrong password❌ please try again!");
    return res.redirect("/");
    
  }

  req.session.user = user;
  res.redirect("/dashboard");
};

exports.logout = (req, res) => {
  req.session.destroy();

  res.redirect("/");
};

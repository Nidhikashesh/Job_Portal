var express = require('express');
var router = express.Router();

/*  Import Controller File's  */

var auth=require("../controller/userLogin");
var dashboard=require("../controller/dashboard");
var admin=require("../controller/adminDashboard")
var upload=require("../controller/multer");
var CreateJob =require("../controller/createJob");
var validateAdmin =require("../controller/adminLogin")
var jobPost =require("../controller/jobPost");


/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index');
});
/*  sign up page */
router.get('/signup', function(req, res, next) {
    res.render('signup');
   
});

// post signup
router.post('/signup' ,upload.single("image"),auth.signup); 

// post login
router.post('/login',auth.login); 

// logout
router.get('/logout',auth.logout); 

/* Users dashboard */
router.get('/dashboard',dashboard.authenticate);

   /*======= ADMIN ======= */

/* GET adminLogin page */
router.get('/admin-login', function(req, res) {
   res.render('adminLogin');
});

router.post('/login/admin',validateAdmin);

/* main admin dashboard */
router.get('/admin',admin.auth);


// CURD operations by REST API :-

/* GET JOB-POST page */
router.get('/posts', function(req, res) {
    res.render('admin_post');
   
});

/*  Create a JOB-POST */
router.post('/posts', upload.single("companyLogo"),CreateJob);
 
/*  View each JOB-POST by id (Read)*/
router.get('/posts/:id',jobPost.view);

/*  Update a JOBPOST */

// get editJob page 
router.get('/posts/:id/edit',jobPost.getEdit);

router.put('/posts/:id',jobPost.edit);

/*  Delete a JOBPOST */
router.delete('/posts/:id',jobPost.delete);

/*  Admin Logout */
router.get('/admin/logout',admin.logout);

module.exports = router;

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.get('/', function (req, res, next) {
	console.log("coming in get");
    res.render('index');
});

router.post('/users/signin', function (req, res, next) {
	console.log(req.body);
   console.log("coming in signin backend");

   if(req.body.name!=="shubham")
   {
       console.log("invalid credentials");
   return res.status(401).json({
    title: 'Login failed',
    error: {message: 'Invalid login credentials'}
    });
   }

   console.log("valid credentials");
   var token = jwt.sign("TokenBodyData", 'secretKey', {expiresIn: 7200});
   res.status(200).json({
       message: 'Successfully logged in',
       token: token,
       userId: "shubham"
   });


  

});

module.exports = router;

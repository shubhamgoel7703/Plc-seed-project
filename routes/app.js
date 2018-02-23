var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var PumpStatus=false;
var SetPoint="";
var flowData="sample";

router.get('/', function (req, res, next) {
	console.log("coming in get");
    res.render('index');
});

//use by cloud FE
router.get('/flowdata', function (req, res, next) {
    console.log("coming in get");

    res.status(200).json({
        flowData: flowData
   });
});

//use by PLC
router.get('/pumpstatusandsetpoint', function (req, res, next) {
    console.log("coming in get");

    res.status(200).json({
        "PumpStatus": PumpStatus,
        "SetPoint": SetPoint
   });
});


//use by cloud FE
router.post('/pumpstatus', function (req, res, next){
    console.log(req.body);
    console.log("in pump status");
    
    if(req.body.pumpstatus=='on')
    PumpStatus=true;
    else 
    PumpStatus=false;

    console.log(PumpStatus);
});

//use by PLC
router.post('/flowdata', function (req, res, next){
    console.log(req.body);
    flowData=req.body;
});

//use by cloud FE
router.post('/setpoint', function (req, res, next){
    console.log(req.body);
    console.log("in setpoint status");
    
     this.SetPoint=req.body.setpoint;

    console.log(req.body.setpoint);
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

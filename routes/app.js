var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	console.log("coming in get");
    res.render('index');
});

router.post('/users/signin', function (req, res, next) {
	console.log(req.body.username);
   console.log("coming in signin backend");

   next();
});

module.exports = router;

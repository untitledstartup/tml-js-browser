var fs = require('fs');
var path = require('path');
var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/index.html');
});

router.get('/tml.js', function(req, res) {
  var filePath = path.join(__dirname, '../../dist', 'tml.js');
  console.log("Serving " + filePath);
  fs.readFile(filePath, 'utf8', function(err,data){
    res.send(data);  
  });
});

router.get('/tml.min.js', function(req, res) {
  var filePath = path.join(__dirname, '../../dist', 'tml.min.js');
  console.log("Serving " + filePath);
  fs.readFile(filePath, 'utf8', function(err,data){
    res.send(data);  
  });
});

module.exports = router;



var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hi practice1');
});

app.listen(3000, function(){
  console.log('This is logged in the terminal');
});

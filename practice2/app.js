var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send('hi practice2');
});

app.listen(3000, function(){
  console.log('Look at Nodemon!!!!');
});

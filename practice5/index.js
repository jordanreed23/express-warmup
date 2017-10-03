const express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send('hi practice5');
});

app.listen(3000,function(){
  console.log('hear ye hear ye I am nodemon');
});

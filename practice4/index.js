const express = require('express');
const app = express();

app.get('/', function(req,res){
  res.send('hi practice4');
});

app.listen(3000, function(){
  console.log('all work and no play makes nodemon');
});

var path = require('path');
var express = require('express');
var app = express();
app.get('/', function(req, res){
  //some server code related to cookies

  res.sendfile(path.join(__dirname, 'public/index.html'));
});
app.listen(9000);

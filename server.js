var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.get('/', function(req, res){
  //some server code related to cookies
   console.log(req.cookies());
  res.sendfile(path.join(__dirname, 'public/index.html'));
});
app.listen(9000);

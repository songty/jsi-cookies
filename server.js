var path = require('path');
var express = require('express');
var app = express();
app.get('/', function(req, res){
  //some server code related to cookies
  app.use(express.cookieParser('sercret cookies'));
  req.cookies.name;

  res.sendfile(path.join(__dirname, 'public/index.html'));
});
app.listen(9000);

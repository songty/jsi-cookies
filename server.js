var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

  app.use(cookieParser());

app.get('/', function(req, res){
  //some server code related to cookies
   console.log(req.cookies);    
   console.log('last access by user:' + (Date.now() - 
   	req.cookies['last-request-time'])/1000 +'s ago');
   res.cookie('last-request-time', Date.now());
   res.sendfile(path.join(__dirname, 'index.html'));
});
app.listen(9000);

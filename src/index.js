
var express = require('express');
var app = express();
var path =require("path");
import userManager from './routes/user_management/user_management';
import facilityManager from './routes/facility_management/facility_management';

app.use(userManager);
app.use(facilityManager);














app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!\n'+err.message);
})

var port = process.env.PORT || 5000;

app.listen(port,function(){
console.log("Listening on "+port);
});
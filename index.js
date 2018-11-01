var mysql = require('mysql');
var express = require('express');
var app = express();
var path =require("path");
var con; 
con=require('./common/dbConnect.js'); 


app.use((req,res,next)=>{

	console.log("connect middleware");

	next();
});





app.get('/',function(request,response){

con.query("SELECT * FROM department_types", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	response.send(JSON.stringify(result));
  });


});


app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

var port = process.env.PORT || 5000;

app.listen(port,function(){
console.log("Listening on "+port);
});
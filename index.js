var mysql = require('mysql');
var express = require('express');
var app = express();
var path =require("path");
var con; 
con=require('./common/dbConnect.js'); 
var PatientController = require('./controllers/patient_management/PatientController.js');
var myPatientControllerObject;


app.use((req,res,next)=>{

	console.log("connect middleware");

	next();
});





app.get('/',function(request,response){
myPatientControllerObject=new PatientController();
	myPatientControllerObject.insertPatient();
});


app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

var port = process.env.PORT || 5000;

app.listen(port,function(){
console.log("Listening on "+port);
});
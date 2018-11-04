const mysql = require('mysql');
const express = require('express');
const app = express();
const path =require("path");
var dbcredentials;
const PatientController = require('./controllers/patient_management/PatientController.js');
const PatientTypesController = require('./controllers/patient_management/PatientTypesController.js');
//const PatientRoutes = require('./routes/patient_management/PatientRoutes.js');

if(process.env.DB_USER==null){
    dbcredentials=require("./dbcredentials.js");
}
else{
    dbcredentials={
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        insecureAuth : true
    }
}
//app.use(express.logger());
app.use(express.static('public'));

var con;
app.use((req,res,next)=>{
    con = mysql.createConnection(dbcredentials);
    con.on('error',(err) =>{
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            console.log(err);                        // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            //throw err;                                  // server variable configures this)
        }
    });
    console.log("connect middleware");

    next();
});

app.get('/my_form.html', function (req, res) {
    res.sendFile( __dirname + "/" + "my_form.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})



app.get('/',function(request,res){
	
   res.end("Hello!Welcome");

});

app.get('/patient_registration',function(request,response){
    var myPatientControllerObject=new PatientController();
    myPatientControllerObject.insertPatient();

});

app.get('/get_all_patients',function(request,response){
    var myPatientControllerObject=new PatientController();
    myPatientControllerObject.getAllPatients();

});

app.get('/get_specific_patients',function(request,response){
   var mKey=req.query.column_name;
      var mValue=req.query.search_value--;
    var myPatientControllerObject=new PatientController();
    myPatientControllerObject.getSpecificPatients(mKey,mValue);

});




app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

var port = process.env.PORT || 5000;

app.listen(port,function(){
    console.log("Listening on "+port);
});
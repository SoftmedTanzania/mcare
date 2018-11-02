var mysql = require('mysql');
var express = require('express');
var app = express();
var path =require("path");
var dbcredentials;
var PatientController = require('./controllers/patient_management/PatientController.js');

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



app.get('/',function(request,response){
    response.send("Hello!Welcome to mcare");

});

app.get('/patient_registration',function(request,response){
    var myPatientControllerObject=new PatientController();
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
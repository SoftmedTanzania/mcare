/*SON/2018-11-06 00:29 - DEVELOPMENT

This is the system's entry point.It creates
the database connection and port binding 
then initializes all the route files.

*/



const mysql = require('mysql');
const express = require('express');
const app = express();
const path =require("path");
var dbcredentials;
const PatientController = require('./controllers/patient_management/PatientController.js');
const PatientTypesController = require('./controllers/patient_management/PatientTypesController.js');
var port = process.env.PORT || 5000;


    dbcredentials={
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        insecureAuth : true
    }


app.use(express.static('public'));

var con;
app.use((req,res,next)=>{
    con = mysql.createConnection(dbcredentials);
    con.on('error',(err) =>{
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
            console.log(err);                        
        } else {                                      
            //throw err;                                  
        }
    });
    console.log("connect middleware");

    next();
});


app.use(require('./routes/patient_management/PatientRoutes.js'));
app.use(require('./routes/patient_management/PatientTypesRoutes.js'));
app.use(require('./routes/patient_management/PatientTypeCategoriesRoutes.js'));
app.use(require('./routes/patient_management/PatientIndividualQualitiesRoutes.js'));
app.use(require('./routes/patient_management/PatientSponsorsRoutes.js'));
app.use(require('./routes/patient_management/PatientCheckUpsRoutes.js'));
app.use(require('./routes/patient_management/PatientConditionRoutes.js'));
app.use(require('./routes/patient_management/PatientCustodianRoutes.js'));
app.use(require('./routes/patient_management/PatientGeneralRecordTypesRoutes.js'));
app.use(require('./routes/patient_management/PatientGeneralRecordTypeCategoriesRoutes.js'));
app.use(require('./routes/patient_management/PatientGeneralRecordsRoutes.js'));
app.use(require('./routes/patient_management/PatientVisitsRoutes.js'));
app.use(require('./routes/patient_management/PatientRevisitsRoutes.js'));
app.use(require('./routes/patient_management/EncountersRoutes.js'));



app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

var port = process.env.PORT || 5000;

app.listen(port,function(){
    console.log("Listening on "+port);
});
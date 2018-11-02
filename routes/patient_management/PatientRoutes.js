const mysql = require('mysql');
const express = require('express');
const app = express();
const path =require("path");
var dbcredentials;
const PatientController = require('../../controllers/patient_management/PatientController.js');

var PatientRoutesModule = (function () {

    var PatientRoutes = function () {

    };

    dbcredentials = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        insecureAuth: true
    }

//app.use(express.logger());
    var con;
    PatientRoutes.prototype.app.use((req, res, next) => {
        con = mysql.createConnection(dbcredentials);
        con.on('error', (err) => {
            console.log('db error', err);
            if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
                console.log(err);                        // lost due to either server restart, or a
            } else {                                      // connnection idle timeout (the wait_timeout
                //throw err;                                  // server variable configures this)
            }
        });
        console.log("connect middleware");

        next();
    });


    PatientRoutes.prototype.app.get('/patient_registration', function (request, response) {
        var myPatientControllerObject = new PatientController();
        myPatientControllerObject.insertPatient();

    });

    return {
        PatientRoutes: PatientRoutes
    }

}());

module.exports = PatientRoutesModule;

const mysql = require('mysql');
const express = require('express');
const app = express();
const path =require("path");
//var con=require('../../common/dbConnect.js');
//const ModelMaster=require('../ModelMaster.js');
const TableName="patient_types";
var patientTypeDescription_;
var patientTypeCode_;

module.exports = class PatientRoutes{


    constructor(){


    }



    hello(){
        app.get('/',function(request,response){
            response.send("Hello!Welcome to mcare");

        });

    }


}
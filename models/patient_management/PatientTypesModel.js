
var mysql = require('mysql');
var express = require('express');
var app = express();
var path =require("path");
//var con=require('../../common/dbConnect.js');
const ModelMaster=require('../ModelMaster.js');

var patientTypeDescription_;
var patientTypeCode_;

module.exports = class PatientTypeModel{


    constructor(patientTypeDescription,patientTypeCode){
        patientTypeDescription_ = surname;
        patientTypeCode_ = middleName;

    }



    insert(){
        const  myModelMaster=new ModelMaster();
        var post  = {PatientTypeDescription: patientTypeDescription_,PatientTypeCode: patientTypeCode_};
        var TableName="patient_types";
        myModelMaster.insert(TableName,post);

    }


}
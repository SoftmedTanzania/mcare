
const mysql = require('mysql');
const express = require('express');
const app = express();
const path =require("path");
//var con=require('../../common/dbConnect.js');
const ModelMaster=require('../ModelMaster.js');
const TableName="patient_types";
var patientTypeDescription_;
var patientTypeCode_;

module.exports = class PatientTypeModel{


    constructor(patientTypeDescription,patientTypeCode){
        patientTypeDescription_ = patientTypeDescription;
        patientTypeCode_ = patientTypeCode;

    }



    insertPatientTypes(){
        const  myModelMaster=new ModelMaster();
        var post  = {PatientTypeDescription: patientTypeDescription_,PatientTypeCode: patientTypeCode_};
        myModelMaster.insert(TableName,post);

    }


}
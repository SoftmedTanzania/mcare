
var mysql = require('mysql');
var express = require('express');
var app = express();
var path =require("path");
//var con=require('../../common/dbConnect.js');
const ModelMaster=require('../ModelMaster.js');

var surname_;
var middleName_;
var lastName_;
var patientPhoneNumber_;
var patientEmail_;
var patientPhysicalAddress_;
var patientDOB_;
var patientReferenceNo_;
var parentId_;
var deceased_;
var patientPicUrl_;
var actualImage_;
var facilityId_=1;

module.exports = class PatientModel{


 constructor(surname,middleName,lastName,patientPhoneNumber,patientEmail,patientPhysicalAddress,patientDOB,patientReferenceNo,parentId,deceased,patientPicUrl,actualImage){                                                                                                                                                                                                                                                             
     surname_ = surname;
     middleName_ = middleName;
     lastName_ = lastName;
     patientPhoneNumber_ = patientPhoneNumber;
     patientEmail_ = patientEmail;
     patientPhysicalAddress_ = patientPhysicalAddress;
     patientDOB_ = patientDOB;
     patientReferenceNo_ = patientReferenceNo;
     parentId_ = parentId;
     deceased_ = deceased;
     patientPicUrl_ = patientPicUrl;
     actualImage_ = actualImage;
 }



insert(){
 	 const  myModelMaster=new ModelMaster();
	 var post  = {FacilityId: facilityId_,Surname: surname_,MiddleName: middleName_,LastName: lastName_,PatientPhoneNumber: patientPhoneNumber_,PatientEmail: patientEmail_,PatientPhysicalAddress: patientPhysicalAddress_,PatientDateOfBirth: patientDOB_,PatientReferenceNo: patientReferenceNo_,ParentId: parentId_,Deceased: deceased_,PatientPicUrl: patientPicUrl_,ActualImage: actualImage_};
	 var patientTable="patients";
    myModelMaster.insert(patientTable,post);
 
 }


}
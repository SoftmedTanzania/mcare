
var mysql = require('mysql');
var express = require('express');
var app = express();
var path =require("path");
var con=require('../../common/dbConnect.js');

var surname;
var middleName;
var lastName;
var patientPhoneNumber;
var patientEmail;
var patientPhysicalAddress;
var patientDOB;
var patientReferenceNo;                                                                                                                                                                                                                                                                                                                                                                                                                           
var parentId;
var deceased;
var patientPicUrl;
var actualImage;
var facilityId=1;

module.exports = class PatientModel{


 constructor(surname,middleName,lastName,patientPhoneNumber,patientEmail,patientPhysicalAddress,patientDOB,patientReferenceNo,parentId,deceased,patientPicUrl,actualImage){                                                                                                                                                                                                                                                             
     this.surname = surname ;
	 this.middleName = middleName ;
	 this.lastName = lastName ;
	 this.patientPhoneNumber = patientPhoneNumber ;
	 this.patientEmail = patientEmail ;
	 this.patientPhysicalAddress = patientPhysicalAddress ;
	 this.patientDOB = patientDOB ;
	 this.patientReferenceNo = patientReferenceNo ;
	 this.parentId = parentId ;
	 this.deceased = deceased ;
	 this.patientPicUrl = patientPicUrl ;
	 this.actualImage = actualImage ;
 }



 insert(){
    var sql = "INSERT INTO `patients` (`PatientId`, `FacilityId`, `Surname`, `MiddleName`, `LastName`, `PatientPhoneNumber`, `PatientEmail`, `PatientPhysicalAddress`, `PatientDateOfBirth`, `PatientReferenceNo`, `ParentId`, `Deceased`, `PatientPicUrl`, `ActualImage`) VALUES (NULL, '1', 'Ochieng', 'Calvin', 'Omondi', '070789543', 'ochieng@gmail', 'Koguta', '2018-11-18', 'WE435', NULL, '1', 'fgsami8890-0-0-0', 'fgsami8890-0-0-0');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
 
 }


}
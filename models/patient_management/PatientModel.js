
const mysql = require('mysql');
const express = require('express');
const app = express();
const path =require("path");
//var con=require('../../common/dbConnect.js');
const ModelMaster=require('../ModelMaster.js');
const TableName="patients";
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
    myModelMaster.insert(TableName,post);
 
    }

    getAllPatients(callback){
        const  myModelMaster=new ModelMaster();

        myModelMaster.selectAll(TableName,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
		
		myModelMaster.update()

    }

    getSpecificPatients(ColumnName,value_,callback){
        const  myModelMaster=new ModelMaster();


        myModelMaster.selectSpecific(TableName,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }
	
	batch_patients_update(jsonObject_,callback){
        const  myModelMaster=new ModelMaster();


        myModelMaster.batch_update(TableName,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }
	
	individual_patients_update(ColumnName,value_,callback){
        const  myModelMaster=new ModelMaster();

		var name_1="Susan";
		var name_2="Maya";
		
		
        var jsonObject_  = {Surname: name_1,MiddleName: name_2}
        
		myModelMaster.individual_update(TableName,jsonObject_,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }
	
	delete_patients_record(ColumnName,value_,callback){
        const  myModelMaster=new ModelMaster();

        
		myModelMaster.delete(TableName,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }
	
	


}
/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the "patients_individual_qualities" table's model
class.It receives any CRUD operation 
requests and hands the over to class 
ModelMaster.It creates an instance of class
ModelMaster then passes parameters to its
functions.

*/


const mysql = require('mysql');
const express = require('express');
const app = express();
const path =require("path");
const ModelMaster=require('../ModelMaster.js');
const TableName="patient_individual_qualities";



module.exports = class PatientIndividualQualitiesModel{


    constructor(){                                                                                                                                                                                                                                                             
     
 }
	
	

    insert_patient_individual_qualities(jsonObject_,callback){
 	  const  myModelMaster=new ModelMaster();

        myModelMaster.insert(TableName,jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
 
    }	
	
	
	
	
   get_all_patient_individual_qualities(callback){
        const  myModelMaster=new ModelMaster();

        myModelMaster.selectAll(TableName,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
		
		

    }	
	
	
	
	
	
	
   get_specific_patient_individual_qualities(ColumnName,value_,callback){
        const  myModelMaster=new ModelMaster();


        myModelMaster.selectSpecific(TableName,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }	
	
	
	
	
	
	
	
   batch_patient_individual_qualities_update(jsonObject_,callback){
        const  myModelMaster=new ModelMaster();


        myModelMaster.batch_update(TableName,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }	
	
	
	
	
	
	
   individual_patient_individual_qualities_update(ColumnName,value_,jsonObject_,callback){
        const  myModelMaster=new ModelMaster();

        
		myModelMaster.individual_update(TableName,jsonObject_,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }	
	
	
	
	
delete_patient_individual_qualities_record(ColumnName,value_,callback){
        const  myModelMaster=new ModelMaster();

        
		myModelMaster.delete(TableName,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }	
	
	
}
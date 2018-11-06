/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the "patients" table's model
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
const TableName="patients";

module.exports = class PatientModel{


 constructor(){                                                                                                                                                                                                                                                             
     
 }



    insertPatients(jsonObject_,callback){
 	 const  myModelMaster=new ModelMaster();

    myModelMaster.insert(TableName,jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
 
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
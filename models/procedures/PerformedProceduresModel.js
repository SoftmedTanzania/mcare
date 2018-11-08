/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the "performed_procedures" table's model
class.It receives any CRUD operation 
requests and hands them over to class 
ModelMaster.It creates an instance of class
ModelMaster then passes parameters to its
functions.

*/




const mysql = require('mysql');
const express = require('express');
const app = express();
const path =require("path");
const ModelMaster=require('../ModelMaster.js');
const TableName="performed_procedures";



module.exports = class PerformedProceduresModel{


    constructor(){                                                                                                                                                                                                                                                             
     
 }
	
	

	
   insert_performed_procedures(jsonObject_,callback){
 	 const  myModelMaster=new ModelMaster();

    myModelMaster.insert(TableName,jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
 
    }		
	
	
   get_all_performed_procedures(callback){
        const  myModelMaster=new ModelMaster();

        myModelMaster.selectAll(TableName,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
		
		

    }			
	
	
   get_specific_performed_procedures(ColumnName,value_,callback){
        const  myModelMaster=new ModelMaster();


        myModelMaster.selectSpecific(TableName,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }			
	
	
	
	
	
   batch_performed_procedures_update(jsonObject_,callback){
        const  myModelMaster=new ModelMaster();


        myModelMaster.batch_update(TableName,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }		
			
	
	
	
	
   individual_performed_procedures_update(ColumnName,value_,jsonObject_,callback){
        const  myModelMaster=new ModelMaster();

        
		myModelMaster.individual_update(TableName,jsonObject_,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }		
	
	
	
	
	
	
   delete_performed_procedures_record(ColumnName,value_,callback){
        const  myModelMaster=new ModelMaster();

        
		myModelMaster.delete(TableName,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }		
	
		
	
	
}
/*SON/2018-11-06 00:29 - DEVELOPMENT

This class is the "performed_procedure_record_type_category"
table's modelclass.It receives any CRUD operation 
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
const TableName="performed_procedure_record_type_category";


module.exports = class PerformedProcedureRecordTypeCategoryModel{


    constructor(){                                                                                                                                                                                                                                                             
     
 }
	
	

	
   insert_performed_procedure_record_type_category(jsonObject_,callback){
 	 const  myModelMaster=new ModelMaster();

    myModelMaster.insert(TableName,jsonObject_,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
 
    }		
	
	
	
   get_all_performed_procedure_record_type_category(callback){
        const  myModelMaster=new ModelMaster();

        myModelMaster.selectAll(TableName,function(request,res){

			var returned_value_=res;
			
			callback(null, returned_value_);
        });
		
		

    }			
	
	
	
	
	
	
   get_specific_performed_procedure_record_type_category(ColumnName,value_,callback){
        const  myModelMaster=new ModelMaster();


        myModelMaster.selectSpecific(TableName,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }	
	
	
	
	
	
   batch_performed_procedure_record_type_category_update(jsonObject_,callback){
        const  myModelMaster=new ModelMaster();


        myModelMaster.batch_update(TableName,jsonObject_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }			
	
	
	
	
	
	
	
   individual_performed_procedure_record_type_category_update(ColumnName,value_,jsonObject_,callback){
        const  myModelMaster=new ModelMaster();

        
		myModelMaster.individual_update(TableName,jsonObject_,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }		
		
	
	
	
	
	
	
   delete_performed_procedure_record_type_category_record(ColumnName,value_,callback){
        const  myModelMaster=new ModelMaster();

        
		myModelMaster.delete(TableName,ColumnName,value_,function(request,res){

            var returned_value_=res;

            callback(null, returned_value_);
        });

    }		
	
	
	
	
}
	

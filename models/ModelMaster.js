/*SON/2018-11-06 00:29 - DEVELOPMENT

This class carries all of the system's CRUD operations.
All create,read,update and delete operations go through
this class.The methods have been tested and proven to 
be working.Create an instance of the class and call any
of its methods

*/


var mysql = require('mysql');
var express = require('express');
var app = express();
var path =require("path");
var con=require('../common/dbConnect.js');

module.exports = class ModelMaster {

    constructor() {
    }

    insert(tableName, jsonObject_) {


        con.query('INSERT INTO ' + tableName + ' SET ?', jsonObject_, function (err, result) {
            if (err) throw err;
            console.log("Insert was successful");
        });

    }

    selectAll(tableName,callback) {


        con.query('SELECT * FROM ' + tableName + ';', function (err, result, fields) {
            if (err) throw err;

			var returned_value_=result;
			callback(null, returned_value_);
        });

    }

    selectSpecific(tableName,ColumnName,value_,callback) {


        var sql = 'SELECT * FROM '+tableName+' WHERE '+ColumnName+' = '+ mysql.escape(value_);
        con.query(sql, function (err, result) {
            if (err) throw err;


            var returned_value_=result;
            callback(null, returned_value_);

        });


    }
	
	batch_update(tableName,jsonObject_,callback) {
		

        con.query('UPDATE ' + tableName + ' SET ?', jsonObject_, function (err, result) {
            if (err) throw err;
            
			var returned_value_="Update was Successful";
            callback(null, returned_value_);
        });

   }
	
	individual_update(tableName,jsonObject_,ColumnName,value_,callback) {
		

        this.selectSpecific(tableName,ColumnName,value_,function(request,res){

            var returned_value_=res;
			
			
			
			if(returned_value_.length===0)
			{
			returned_value_="No such record exists";
				callback(null, returned_value_);
			}else{
			
			con.query('UPDATE ' + tableName + ' SET ? WHERE '+ColumnName+' = '+ mysql.escape(value_), jsonObject_, function (err, result) {
            if (err) throw err;
            
			var returned_value_="Update was Successful";
            callback(null, returned_value_);
            });

			
			}

            
        });
		
    }
	
	
	
	delete(tableName,ColumnName,value_,callback) {
		
		
		this.selectSpecific(tableName,ColumnName,value_,function(request,res){

            var returned_value_=res;
			
			
			
			if(returned_value_.length===0)
			{
			returned_value_="No such record exists";
				callback(null, returned_value_);
			}else{
			
			con.query('DELETE FROM ' + tableName + ' WHERE '+ColumnName+' = '+ mysql.escape(value_), function (err, result) {
            if (err) throw err;
            
			var returned_value_="Record Succesfully Deleted";
            callback(null, returned_value_);
            });

			
			}

            
        });
		
	}
	
	
	
	
	batch_program(){
	
		
  if (err) throw err;
  con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
	  for (var i = 0; i < result.length; i++) {
		  
        con.query("SELECT * FROM users WHERE users.id = "+result[i].id, function (err, result) {
         if (err) throw err;
         console.log(result);
       });
        
     }
   });

}
	
	
	

}
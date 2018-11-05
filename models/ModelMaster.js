var mysql = require('mysql');
var express = require('express');
var app = express();
var path =require("path");
var con=require('../common/dbConnect.js');

module.exports = class PatientModel {

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
            
			var returned_value_=result;
            callback(null, returned_value_);
        });

    }
	
	

}
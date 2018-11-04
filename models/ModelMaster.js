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

    selectAll(tableName) {


        con.query('SELECT * FROM ' + tableName + ';', function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });

    }

    selectSpecific(tableName,ColumnName,value_) {
//var sql = 'SELECT * FROM patients WHERE PatientId =18;';

        var sql = 'SELECT * FROM '+tableName+' WHERE '+ColumnName+' = '+ mysql.escape(value_);
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log(tableName);
            console.log(ColumnName);
            console.log(value_);


        });


    }


}
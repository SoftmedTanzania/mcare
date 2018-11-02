var mysql = require('mysql');
var express = require('express');
var app = express();
var path =require("path");
var con=require('../common/dbConnect.js');

module.exports = class PatientModel{

    constructor(){}

    insert(tableName,jsonObject_){


        var query = con.query('INSERT INTO '+tableName+ ' SET ?', jsonObject_, function(err, result) {
            if (err) throw err;
            console.log("Insert was successful");
        });

    }



}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connect;

var con = require('./dbConnect.js');

function connect() {
  return new Promise(function (resolve, reject) {
    if (con) {
      resolve(con);
    } else {
      reject(con);
    }
  });
}
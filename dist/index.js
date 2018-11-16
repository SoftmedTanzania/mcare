"use strict";

var _user_management = _interopRequireDefault(require("./routes/user_management/user_management"));

var _facility_management = _interopRequireDefault(require("./routes/facility_management/facility_management"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var app = express();

var path = require("path");

app.use(_user_management.default);
app.use(_facility_management.default);
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!\n' + err.message);
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on " + port);
});
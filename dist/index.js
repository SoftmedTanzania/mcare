"use strict";

var _asyncConnect = _interopRequireDefault(require("./common/asyncConnect"));

var _ApiResponse = _interopRequireDefault(require("./common/types/ApiResponse"));

var _RolesModel = _interopRequireDefault(require("./models/user_management/roles_models/RolesModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var app = express();

var path = require("path");

var con = require('./common/dbConnect.js');

app.use(function (req, res, next) {
  mysqlx.getSession(dbcredentials).then(function (session) {
    if (session != null) {
      req.dbSession = session;
      next();
    }
  }).catch(function (err) {
    throw err;
  });
});
app.get('/', function (req, res) {
  if (req.dbSession == null) {
    throw new Error("No database session");
  }

  req.dbSession.getSchema('mcare').getTable('department_types').select().execute(function (row) {
    console.log(row); // ['bar', 42]

    res.send(row);
  });
});
app.get('/roleType', function (request, response) {
  var roleType = {
    RoleTypeId: 'null',
    RoleTypeDescription: "some description of role",
    RoleTypeCode: 45
  };
  var model = new _RolesModel.default();
  model.addRoleType(roleType).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.send(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, "err", false);
    response.statusCode = 400;
    response.send(JSON.stringify(api));
  });
});
app.get('/roleTypeCategory', function (request, response) {
  var roleTypeCategory = {
    RoleTypeCategoryId: null,
    RoleTypeId: 8,
    RoleTypeCategoryDescription: "description",
    RoleTypeCategoryCode: 67
  };
  var model = new _RolesModel.default();
  model.addRoleCategory(roleTypeCategory).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.send(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, "err", false);
    response.statusCode = 400;
    response.send(JSON.stringify(api));
  });
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!\n' + err.message);
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on " + port);
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncConnect = _interopRequireDefault(require("../../common/asyncConnect"));

var _ApiResponse = _interopRequireDefault(require("../../common/types/ApiResponse"));

var _facilityModel = _interopRequireDefault(require("../../models/facility/facilityModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by ebundala on 11/14/2018.
 */
var express = require("express");

var router = express.Router();
router.get('/department/type/insert', function (request, response) {
  var roleType = {
    DepartmentTypeId: null,
    TypeName: "some name",
    TypeCode: 0
  };
  var model = new _facilityModel.default();
  model.create("department_types", roleType).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/department/type/update/:id', function (request, response) {
  //todo remove this after testing complete
  var depertmentType = {
    // DepartmentTypeId:request.params.id,
    TypeName: "some name updated",
    TypeCode: 0
  };
  var where = {
    departmentTypeId: request.params.id
  };
  var model = new _facilityModel.default();
  model.update("department_types", depertmentType, where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/department/type/delete/:id', function (request, response) {
  var where = {
    DepartmentTypeId: request.params.id,
    TypeName: "some name",
    TypeCode: 0
  };
  var model = new _facilityModel.default();
  model.delete("department_types", where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/department/type', function (request, response) {
  var where = {
    DepartmentTypeId: 0,
    TypeName: "some name",
    TypeCode: 0
  };
  var model = new _facilityModel.default();
  model.read("department_types", where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/department/category/insert', function (request, response) {
  var depertmentCategoryType = {
    DepartmentTypeCategoryId: null,
    DepartmentTypeId: 0,
    TypeCategoryName: "some name",
    TypeCategoryCode: 0
  };
  var model = new _facilityModel.default();
  model.create("department_type_categories", depertmentCategoryType).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/department/category/update/:id', function (request, response) {
  //todo remove this after testing complete
  var depertmentCategoryType = {
    // DepartmentTypeCategoryId:null,
    DepartmentTypeId: 0,
    TypeCategoryName: "some category name updated",
    TypeCategoryCode: 0
  };
  var where = {
    DepartmentTypeId: request.params.id
  };
  var model = new _facilityModel.default();
  model.update("department_type_categories", depertmentCategoryType, where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/department/category/delete/:id', function (request, response) {
  var where = {
    DepartmentTypeId: request.params.id,
    TypeName: "some name",
    TypeCode: 0
  };
  var model = new _facilityModel.default();
  model.delete("department_type_categories", where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/department/category', function (request, response) {
  var where = {
    // DepartmentTypeCategoryId:null,
    DepartmentTypeId: 0,
    TypeCategoryName: "some category name updated",
    TypeCategoryCode: 0
  };
  var model = new _facilityModel.default();
  model.read("department_type_categories", where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/department/insert', function (request, response) {
  var department = {
    DepartmentId: null,
    DepartmentTypeCategoryId: 0,
    DepartmentDescription: "some dep description",
    DepartmentReferenceNo: 0
  };
  var model = new _facilityModel.default();
  model.create("department", department).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/department/update/:id', function (request, response) {
  //todo remove this after testing complete
  var department = {
    // DepartmentId:null,
    DepartmentTypeCategoryId: 0,
    DepartmentDescription: "some dep description updated",
    DepartmentReferenceNo: 0
  };
  var where = {
    DepartmentId: request.params.id
  };
  var model = new _facilityModel.default();
  model.update("department", department, where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/department/delete/:id', function (request, response) {
  var where = {
    DepartmentId: request.params.id //DepartmentTypeCategoryId:0,
    //DepartmentDescription:"some dep description updated",
    //DepartmentReferenceNo:0

  };
  var model = new _facilityModel.default();
  model.delete("department", where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/department', function (request, response) {
  var where = {
    // DepartmentId:request.params.id,
    DepartmentTypeCategoryId: 0,
    //DepartmentDescription:"some dep description updated",
    DepartmentReferenceNo: 0
  };
  var model = new _facilityModel.default();
  model.read("department", where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
var _default = router;
exports.default = _default;
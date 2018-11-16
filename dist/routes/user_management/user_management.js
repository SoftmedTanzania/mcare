"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncConnect = _interopRequireDefault(require("../../common/asyncConnect"));

var _ApiResponse = _interopRequireDefault(require("../../common/types/ApiResponse"));

var _RolesModel = _interopRequireDefault(require("../../models/user_management/roles_models/RolesModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by ebundala on 11/14/2018.
 */
var express = require("express");

var router = express.Router();
router.get('/role/type/insert', function (request, response) {
  var roleType = {
    RoleTypeId: 'null',
    RoleTypeDescription: "some description of role",
    RoleTypeCode: 45
  };
  var model = new _RolesModel.default();
  model.addRoleType(roleType).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/role/type/update/:id', function (request, response) {
  //todo remove this after testing complete
  var roleType = {
    RoleTypeDescription: "some description of role updated",
    RoleTypeCode: 45
  };
  var where = {
    RoleTypeId: request.params.id
  };
  var model = new _RolesModel.default();
  model.update("role_types", roleType, where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/role/type/delete/:id', function (request, response) {
  var where = {
    RoleTypeId: request.params.id
  };
  var model = new _RolesModel.default();
  model.delete("role_types", where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/role/type', function (request, response) {
  var where = {
    // RoleTypeId:'null',
    RoleTypeDescription: "some description of role",
    RoleTypeCode: 45
  };
  var model = new _RolesModel.default();
  model.read("role_types", where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/role/category/insert', function (request, response) {
  var roleTypeCategory = {
    RoleTypeCategoryId: null,
    RoleTypeId: 8,
    RoleTypeCategoryDescription: "description",
    RoleTypeCategoryCode: 67
  };
  var model = new _RolesModel.default();
  model.addRoleCategory(roleTypeCategory).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/role/category/update/:id', function (request, response) {
  var roleTypeCategory = {
    RoleTypeCategoryId: request.params.id,
    RoleTypeId: 9,
    RoleTypeCategoryDescription: "description updated" // RoleTypeCategoryCode:67

  };
  var where = {
    RoleTypeCategoryId: request.params.id,
    RoleTypeId: 8
  };
  var model = new _RolesModel.default();
  model.update("role_type_categories", roleTypeCategory, where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/role/category/delete/:id', function (request, response) {
  var where = {
    RoleTypeCategoryId: request.params.id
  };
  var model = new _RolesModel.default();
  model.deleteRecord("role_type_categories", where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/role/category', function (request, response) {
  //todo make this form request data
  var where = {
    // RoleTypeCategoryId:null,
    RoleTypeId: 8,
    RoleTypeCategoryDescription: "description",
    RoleTypeCategoryCode: 67
  };
  var model = new _RolesModel.default();
  model.read("role_type_categories", where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/role/insert', function (request, response) {
  var role = {
    RoleId: null,
    RoleTypeCategoryId: 12,
    RoleDescription: "some description",
    UserId: 0
  };
  var model = new _RolesModel.default();
  model.create("roles", role).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/role/update/:id', function (request, response) {
  var role = {
    RoleTypeCategoryId: 12,
    RoleDescription: "some description ".Math.random(),
    UserId: 0
  };
  where = {
    RoleId: request.params.id
  };
  var model = new _RolesModel.default();
  model.update("roles", role, where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/role/delete/:id', function (request, response) {
  var where = {
    RoleId: request.params.id
  };
  var model = new _RolesModel.default();
  model.deleteRecord("roles", where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
897;
router.get('/role', function (request, response) {
  var where = {
    RoleTypeCategoryId: 12,
    UserId: 1
  };
  var model = new _RolesModel.default();
  model.read("roles", where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/user/insert', function (request, response) {
  var user = {
    UserId: null,
    DepartmentId: 0,
    Surname: "john",
    MiddleName: "doe",
    LastName: "frank",
    PhoneNumber: 986466,
    Email: "example@example.com",
    Password: "ghjjk",
    ProfPicUrl: "some url",
    PhysicalAddress: "",
    NationalId: "",
    JobReferenceNo: ""
  };
  var model = new _RolesModel.default();
  model.addUser(user).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/user/update/:id', function (request, response) {
  var user = {
    UserId: null,
    DepartmentId: null,
    Surname: "john".Math.random(),
    MiddleName: "doe",
    LastName: "frank",
    PhoneNumber: 986466,
    Email: "example@example.com",
    Password: "ghjjk",
    ProfPicUrl: "some url",
    PhysicalAddress: "",
    NationalId: "",
    JobReferenceNo: ""
  };
  var where = {
    UserId: request.params.id
  };
  var model = new _RolesModel.default();
  model.updateUser(user, where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/user/delete/:id', function (request, response) {
  var where = {
    UserId: request.params.id
  };
  var model = new _RolesModel.default();
  model.deleteRecord("users", where).then(function (result) {
    var api = new _ApiResponse.default(result, null, true);
    response.json(JSON.stringify(api));
  }).catch(function (err) {
    var api = new _ApiResponse.default(null, err, false);
    response.statusCode = 400;
    response.json(JSON.stringify(api));
  });
});
router.get('/user', function (request, response) {
  var where = {
    MiddleName: "doe",
    LastName: "frank",
    PhoneNumber: 986466,
    Email: "example@example.com",
    Password: "ghjjk"
  };
  var model = new _RolesModel.default();
  model.read("users", where).then(function (result) {
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
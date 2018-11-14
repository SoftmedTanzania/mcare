"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseModel2 = _interopRequireDefault(require("../../BaseModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UserModel =
/*#__PURE__*/
function (_BaseModel) {
  _inherits(UserModel, _BaseModel);

  function UserModel() {
    _classCallCheck(this, UserModel);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserModel).apply(this, arguments));
  }

  _createClass(UserModel, [{
    key: "read",
    value: function read(select, where, like) {
      var first = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var order_by = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    }
  }, {
    key: "create",
    value: function create() {}
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "delete",
    value: function _delete() {}
  }, {
    key: "getByID",
    value: function getByID() {}
  }, {
    key: "getByCategory",
    value: function getByCategory() {}
  }, {
    key: "getByDepartment",
    value: function getByDepartment() {}
  }, {
    key: "getByRole",
    value: function getByRole() {}
  }, {
    key: "count",
    value: function count() {}
  }]);

  return UserModel;
}(_BaseModel2.default);

exports.default = UserModel;
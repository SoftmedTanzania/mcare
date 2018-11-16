"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncConnect = _interopRequireDefault(require("../common/asyncConnect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseModel =
/*#__PURE__*/
function () {
  function BaseModel() {
    _classCallCheck(this, BaseModel);
  }

  _createClass(BaseModel, [{
    key: "db",
    value: function db() {
      return (0, _asyncConnect.default)();
    }
  }, {
    key: "create",
    value: function create(tableName, val) {
      return this.db().then(function (con) {
        var collums,
            params = [],
            placeholders = [];
        collums = Object.keys(val);
        collums.forEach(function (key) {
          placeholders.push("?");
          params.push(val[key]);
        });
        console.log(collums, params);
        var sql = "INSERT INTO ?? (??) VALUES (" + placeholders.join(",") + ")";
        return new Promise(function (resolve, reject) {
          var query = con.query(sql, [tableName, collums].concat(params), function (err, result, fields) {
            console.log(query.sql);
            if (err) reject(err);
            resolve(result);
          });
        });
      });
    }
  }, {
    key: "read",
    value: function read(tableName, where) {
      var select = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "*";
      var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "AND";
      var like = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var first = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var offset = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      var order_by = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
      return this.db().then(function (con) {
        var collumsP = select,
            collums,
            params = [],
            values = [];

        if (select !== "*") {
          collumsP = "??";
          params.push(select);
        }

        collums = Object.keys(where);
        collums.forEach(function (key) {
          values.push(where[key]);
        });
        var len = collums.length;
        var sql = "SELECT " + collumsP + " FROM ?? WHERE " + (len > 1 ? collums.join("=? " + mode + " ") : collums.join()) + "=?";
        params.push.apply(params, [tableName].concat(values));
        return new Promise(function (resolve, reject) {
          var query = con.query(sql, params, function (err, result, fields) {
            console.log(query.sql);
            if (err) reject(err);
            resolve(result);
          });
        });
      });
    }
  }, {
    key: "update",
    value: function update(tableName, val, where) {
      var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "AND";
      return this.db().then(function (con) {
        var values = [],
            collums = Object.keys(where);
        collums.forEach(function (key) {
          values.push(where[key]);
        });
        var len = collums.length;
        var sql = "UPDATE ?? SET ? WHERE " + (len > 1 ? collums.join("=? " + mode + " ") : collums.join()) + "=?";
        console.log(len, collums, values);
        return new Promise(function (resolve, reject) {
          var query = con.query(sql, [tableName, val].concat(values), function (err, result, fields) {
            console.log(query.sql);
            if (err) reject(err);
            resolve(result);
          });
        });
      });
    }
  }, {
    key: "deleteRecord",
    value: function deleteRecord(tableName, where) {
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "AND";
      return this.db().then(function (con) {
        var collums,
            values = [];
        collums = Object.keys(where);
        collums.forEach(function (key) {
          values.push(where[key]);
        });
        var len = collums.length;
        var sql = "DELETE FROM ?? WHERE " + (len > 1 ? collums.join("=? " + mode + "") : collums.join()) + "=?";
        return new Promise(function (resolve, reject) {
          var query = con.query(sql, [tableName].concat(values), function (err, result, fields) {
            console.log(query.sql);
            if (err) reject(err);
            resolve(result);
          });
        });
      });
    }
  }, {
    key: "query",
    value: function query(sql, params) {
      return this.db().then(function (con) {
        return new Promise(function (resolve, reject) {
          var query = con.query(sql, _toConsumableArray(params), function (err, result, fields) {
            console.log(query.sql);
            if (err) reject(err);
            resolve(result);
          });
        });
      });
    }
  }]);

  return BaseModel;
}();

exports.default = BaseModel;
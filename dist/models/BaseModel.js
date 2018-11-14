"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncConnect = _interopRequireDefault(require("../common/asyncConnect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var collums,
          params = [],
          placeholders = [];

      if (val) {
        collums = Object.keys(val);
        collums.forEach(function (key) {
          placeholders.push("?");
          params.push(val[key]);
        });
        console.log(collums, params);
        var sql = "INSERT INTO ?? (??) VALUES (" + placeholders.join(",") + ")";
        return this.db().then(function (con) {
          return new Promise(function (resolve, reject) {
            var query = con.query(sql, [tableName, collums].concat(params), function (err, result, fields) {
              console.log(query.sql);
              if (err) reject(err);
              resolve(result);
            });
          });
        });
      }
    }
    /* read(select,where,like,first = false, offset = false, order_by = false){
     
    } */

  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "delete",
    value: function _delete() {}
  }]);

  return BaseModel;
}();

exports.default = BaseModel;
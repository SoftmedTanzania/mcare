"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ApiResponse =
/*#__PURE__*/
function () {
  _createClass(ApiResponse, [{
    key: "addData",
    value: function addData(val) {
      this.data.push(val);
    }
  }, {
    key: "addError",
    value: function addError(err) {
      this.errors.push(err);
    }
  }, {
    key: "setStatus",
    value: function setStatus(state) {
      if (state instanceof Boolean) this.status = state;
    }
  }, {
    key: "getErrors",
    get: function get() {
      return this.errors;
    }
  }, {
    key: "getStatus",
    get: function get() {
      this.status;
    }
  }, {
    key: "getData",
    get: function get() {
      this.status;
    }
  }]);

  function ApiResponse(res, err, status) {
    _classCallCheck(this, ApiResponse);

    this.data = [];
    this.errors = [];
    this.status = status;

    if (res instanceof Array) {
      this.data = res;
    } else {
      if (res) this.data.push(res);
    }

    if (err instanceof Array) {
      this.data = err;
    } else {
      if (err) this.errors.push(err);
    }
  }

  return ApiResponse;
}();

exports.default = ApiResponse;
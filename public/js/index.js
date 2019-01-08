"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Validator =
/*#__PURE__*/
function () {
  function Validator(form, settings) {
    var _this = this;

    _classCallCheck(this, Validator);

    this.rules = _objectSpread({
      required: function required(value) {
        return value !== "";
      },
      minLength: function minLength(value, params) {
        return value.length >= params;
      },
      maxLength: function maxLength(value, params) {
        return value.length <= params;
      },
      notZero: function notZero(value) {
        return parseInt(value, 10) > 0;
      },
      int: function int(value) {
        return new RegExp(/^[0-9]+$/gi).test(value);
      },
      float: function float(value) {
        value = value.toString().replace(/\,/, ".");
        return _this.int(value) || new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(value);
      },
      min: function min(value, param) {
        value = value.toString().replace(/\,/, ".");

        if (new RegExp(/^[0-9]+$/gi).test(value) || new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(value)) {
          return parseFloat(value) >= parseFloat(param);
        }

        return parseInt(value, 10) >= parseInt(param, 10);
      },
      max: function max(value, param) {
        value = value.toString().replace(/\,/, ".");

        if (new RegExp(/^[0-9]+$/gi).test(value) || new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(value)) {
          return parseFloat(value) <= parseFloat(param);
        }

        return parseInt(value, 10) <= parseInt(param, 10);
      },
      email: function email(value) {
        return new RegExp(/^(("[\w-\s]+")|([\w\-]+(?:\.[\w\-]+)*)|("[\w-\s]+")([\w\-]+(?:\.[\w\-]+)*))(@((?:[\w\-]+\.)*\w[\w\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(value);
      }
    }, settings.customRules, {
      remote: function remote(value, params) {
        var body = {};
        body[params.nameData] = value;
        var data = {
          method: params.method,
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        };
        return fetch(params.url, data).then(function (res) {
          return res.json();
        }).then(function (data) {
          if (params.check(data)) {
            return Promise.resolve();
          } else {
            return Promise.reject();
          }
        });
      }
    });
    this.errorMessages = _objectSpread({
      required: "This field is required",
      minLength: "This field must have at least {0} characters",
      maxLength: "This field must have max {0} characters",
      notZero: "This field cannot be zero",
      int: "This field must be a integer",
      float: "This field must be a float",
      min: "This field must have be greater than {0}",
      max: "This field must have be less than {0}",
      email: "Email address is invalid",
      remote: "Invalid value"
    }, settings.customMessages);
    this.handleForm = form;
    this.fields = this._getFields(settings.fields);

    this._addEventChange();

    this._addEventSubmit();
  }

  _createClass(Validator, [{
    key: "_handleChange",
    value: function _handleChange(e) {
      var _this2 = this;

      this.validate(e.target).then(function () {
        _this2._hideErrors();
      }).catch(function () {
        _this2._showErrors();
      });
    }
  }, {
    key: "_handleSubmit",
    value: function _handleSubmit(e) {
      var _this3 = this;

      var fieldsNames = Object.keys(this.fields);
      var validePromisesFields = [];
      fieldsNames.forEach(function (fieldName) {
        var fieldElement = _this3.fields[fieldName]["fieldElement"];
        validePromisesFields.push(_this3.validate(fieldElement));
      });
      Promise.all(validePromisesFields).then(function () {
        return true;
      }).catch(function () {
        e.preventDefault();

        _this3._showErrors();

        return false;
      });
    }
  }, {
    key: "_addEventSubmit",
    value: function _addEventSubmit() {
      var _this4 = this;

      var form = this.handleForm;
      form.addEventListener("submit", function (e) {
        return _this4._handleSubmit(e);
      });
    }
  }, {
    key: "_addEventChange",
    value: function _addEventChange() {
      var _this5 = this;

      var fieldsNames = Object.keys(this.fields);
      fieldsNames.forEach(function (fieldName) {
        var fieldElement = _this5.fields[fieldName]["fieldElement"];
        fieldElement.addEventListener("keyup", function (e) {
          return _this5._handleChange(e);
        });
      });
    }
  }, {
    key: "_getFields",
    value: function _getFields(fieldNames) {
      var fields = {};

      for (var fieldName in fieldNames) {
        fields[fieldName] = {
          rules: fieldNames[fieldName],
          fieldElement: this.handleForm.querySelector("[name='".concat(fieldName, "']")),
          error: null
        };
      }

      return fields;
    }
  }, {
    key: "_showErrors",
    value: function _showErrors() {
      var fields = this.fields;

      for (var keyField in fields) {
        var field = fields[keyField];
        var fieldElement = field["fieldElement"];

        if (!fieldElement.parentNode.getElementsByClassName("validate-error").length) {
          var _errorDivNode = document.createElement("div");

          _errorDivNode.className = "validate-error";
          fieldElement.parentNode.appendChild(_errorDivNode);
        }

        var errorDivNode = fieldElement.parentNode.getElementsByClassName("validate-error")[0];

        if (field.error) {
          errorDivNode.innerHTML = field.error;
        } else {
          errorDivNode.innerHTML = "";
        }
      }
    }
  }, {
    key: "_hideErrors",
    value: function _hideErrors() {
      var fields = this.fields;

      for (var keyField in fields) {
        var field = fields[keyField];
        var fieldElement = field["fieldElement"];
        var errorDivNode = fieldElement.parentNode.getElementsByClassName("validate-error")[0];

        if (field.error) {
          continue;
        }

        errorDivNode.innerHTML = "";
      }
    }
  }, {
    key: "validate",
    value: function validate(field) {
      var _this6 = this;

      var fieldElement = field;
      var rulesForThisField = Object.keys(this.fields[fieldElement.getAttribute("name")].rules);
      var fieldName = fieldElement.getAttribute("name");
      var validPromises = [];
      var error = false;
      rulesForThisField.forEach(function (rule) {
        var ruleParams = _this6.fields[fieldName].rules[rule];
        var ruleMethod = _this6.rules[rule];

        if (rule === "remote" && !error) {
          validPromises.push(ruleMethod(fieldElement.value, ruleParams).then(function () {
            _this6.fields[fieldElement.getAttribute("name")].error = null;
            return Promise.resolve();
          }).catch(function () {
            _this6.fields[fieldElement.getAttribute("name")].error = _this6.errorMessages[rule];
            error = true;
            return Promise.reject();
          }));
        } else {
          validPromises.push(new Promise(function (resolve, reject) {
            if (error) {
              return reject();
            }

            if (ruleMethod(fieldElement.value, ruleParams)) {
              _this6.fields[fieldElement.getAttribute("name")].error = null;
              return resolve();
            } else {
              _this6.fields[fieldElement.getAttribute("name")].error = _this6.errorMessages[rule];
              error = true;
              return reject();
            }
          }));
        }
      });
      return validPromises.reduce(function (promiseChain, currentTask) {
        return promiseChain.then(function () {
          return currentTask.then();
        });
      }, Promise.resolve());
    }
  }]);

  return Validator;
}();
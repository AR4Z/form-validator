(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Validator"] = factory();
	else
		root["Validator"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      required: function required(field) {
        if (field.type === 'radio' || field.type === 'checkbox') {
          return !!_this.handleForm.querySelector("input[name=\"".concat(field.name, "\"]:checked"));
        }

        return field.value !== "";
      },
      minLength: function minLength(field, params) {
        return field.value.length >= params;
      },
      maxLength: function maxLength(field, params) {
        return field.value.length <= params;
      },
      notZero: function notZero(field) {
        return parseInt(field.value, 10) > 0;
      },
      int: function int(field) {
        return new RegExp(/^[0-9]+$/gi).test(field.value);
      },
      float: function float(field) {
        var value = field.value.toString().replace(/\,/, ".");
        return _this.int(value) || new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(value);
      },
      min: function min(field, param) {
        var value = field.value.toString().replace(/\,/, ".");

        if (new RegExp(/^[0-9]+$/gi).test(value) || new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(value)) {
          return parseFloat(value) >= parseFloat(param);
        }

        return parseInt(value, 10) >= parseInt(param, 10);
      },
      max: function max(field, param) {
        var value = field.value.toString().replace(/\,/, ".");

        if (new RegExp(/^[0-9]+$/gi).test(value) || new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(value)) {
          return parseFloat(value) <= parseFloat(param);
        }

        return parseInt(value, 10) <= parseInt(param, 10);
      },
      email: function email(field) {
        return new RegExp(/^(("[\w-\s]+")|([\w\-]+(?:\.[\w\-]+)*)|("[\w-\s]+")([\w\-]+(?:\.[\w\-]+)*))(@((?:[\w\-]+\.)*\w[\w\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(field.value);
      },
      dateMax: function dateMax(field, params) {
        var valueDate = new Date(field.value);
        var maxDate = new Date(params);
        return valueDate <= maxDate;
      },
      dateLess: function dateLess(field, params) {
        var valueDate = new Date(field.value);
        var lessDate = new Date(params);
        return valueDate >= lessDate;
      },
      date: function date(field, param) {
        var regExDateFormats = {
          "yyyy-mm-dd": /^\d{4}-\d{2}-\d{2}$/,
          "yyyy/mm/dd": /^\d{4}\/\d{2}\/\d{2}$/
        };
        var regExDate = regExDateFormats[param];
        if (!field.value.match(regExDate)) return false;
        var date = new Date(field.value);
        if (Number.isNaN(date.getTime())) return false;
        return date.toISOString().slice(0, 10) === field.value;
      },
      confirmation: function confirmation(field, param) {
        var fieldToConfirm = _this.handleForm.querySelector("input[name=\"".concat(param, "\"]"));

        return fieldToConfirm.value === field.value;
      }
    }, settings.rules, {
      remote: function remote(field, params) {
        var body = {};
        body[params.nameData] = field.value;
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
    this.handleForm = form;
    this.fields = this._getFields(settings.fields, settings.messages);

    for (var key in settings.messages) {
      if (_typeof(settings.messages[key]) == "object") {
        delete settings.messages[key];
      }
    }

    this.errorMessages = _objectSpread({
      required: function required() {
        console.log("swws");
        return "This field is required";
      },
      minLength: function minLength(param) {
        return "This field must have at least ".concat(param, " characters");
      },
      maxLength: function maxLength(param) {
        return "This field must have max ".concat(param, " characters");
      },
      notZero: function notZero() {
        return "This field cannot be zero";
      },
      int: function int() {
        return "This field must be a integer";
      },
      float: function float() {
        return "This field must be a float";
      },
      min: function min(param) {
        return "This field must have be greater than ".concat(param);
      },
      max: function max(param) {
        return "This field must have be less than ".concat(param);
      },
      email: function email() {
        return "Email address is invalid";
      },
      remote: function remote() {
        return "Invalid value";
      },
      dateMax: function dateMax(param) {
        return "The max date is ".concat(param);
      },
      dateLess: function dateLess(param) {
        return "The less date is ".concat(param);
      },
      date: function date(param) {
        return "Date is invalid should be ".concat(param);
      },
      confirmation: function confirmation(param) {
        return "This field should be equals to ".concat(param);
      }
    }, settings.messages);

    this._addEventChange();

    this._addEventSubmit();

    this.submit = settings.submit || Promise.resolve();
  }

  _createClass(Validator, [{
    key: "_handleChange",
    value: function _handleChange(e) {
      var _this2 = this;

      this.validate([e.target]).then(function () {
        _this2._hideErrors();
      }).catch(function () {
        _this2._showErrors();
      });
    }
  }, {
    key: "_handleSubmit",
    value: function _handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var fieldsNames = Object.keys(this.fields);
      var validePromisesFields = [];
      fieldsNames.forEach(function (fieldName) {
        var fieldElements = _this3.fields[fieldName]["fieldElements"];
        validePromisesFields.push(_this3.validate(fieldElements));
      });
      return Promise.all(validePromisesFields).then(function () {
        _this3.submit(e).then(function () {
          console.log("Enviando");

          _this3.handleForm.submit();
        }).catch(function () {
          return false;
        });
      }).catch(function () {
        _this3._showErrors();
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
      var events = ["change", "keyup", "paste", "blur"];
      fieldsNames.forEach(function (fieldName) {
        var fieldElements = _this5.fields[fieldName]["fieldElements"];
        events.forEach(function (event) {
          fieldElements.forEach(function (fieldElement) {
            fieldElement.addEventListener(event, function (e) {
              return _this5._handleChange(e);
            });
          });
        });
      });
    }
  }, {
    key: "_getFields",
    value: function _getFields(fieldNames, messages) {
      var fields = {};
      var customMessages = {};

      for (var fieldName in fieldNames) {
        customMessages = {};

        if (messages && fieldName in messages && _typeof(messages[fieldName]) == "object") {
          customMessages = messages[fieldName];
        }

        fields[fieldName] = {
          rules: fieldNames[fieldName],
          fieldElements: Array.from(this.handleForm.querySelectorAll("[name='".concat(fieldName, "']"))),
          customMessages: customMessages || customMessages,
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
        var fieldElement = field["fieldElements"][field["fieldElements"].length - 1];
        var fieldName = fieldElement.getAttribute("name");

        if (!fieldElement.parentNode.querySelectorAll("div[data-form-validator=\"".concat(fieldName, "\"]")).length) {
          var _errorDivNode = document.createElement("div");

          _errorDivNode.setAttribute("data-form-validator", fieldName);

          fieldElement.after(_errorDivNode);
        }

        var errorDivNode = fieldElement.parentNode.querySelector("div[data-form-validator=\"".concat(fieldName, "\"]"));

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
        var fieldElement = field["fieldElements"][field["fieldElements"].length - 1];
        var errorDivNode = fieldElement.parentNode.getElementsByClassName("validate-error")[0];

        if (field.error) {
          continue;
        }

        errorDivNode.innerHTML = "";
      }
    }
  }, {
    key: "validate",
    value: function validate(fields) {
      var _this6 = this;

      var fieldElement = fields[fields.length - 1];
      var rulesForThisField = Object.keys(this.fields[fieldElement.getAttribute("name")].rules);
      var fieldName = fieldElement.getAttribute("name");
      var validPromises = [];
      var error = false;
      rulesForThisField.forEach(function (rule) {
        var ruleParams = _this6.fields[fieldName].rules[rule];
        var ruleMethod = _this6.rules[rule];

        if (rule === "remote" && !error) {
          validPromises.push(ruleMethod(fieldElement, ruleParams).then(function () {
            _this6.fields[fieldElement.getAttribute("name")].error = null;
            return Promise.resolve();
          }).catch(function () {
            _this6.fields[fieldElement.getAttribute("name")].error = rule in _this6.fields[fieldElement.getAttribute("name")].customMessages ? _this6.fields[fieldElement.getAttribute("name")].customMessages[rule](ruleParams) : _this6.errorMessages[rule](ruleParams);
            error = true;
            return Promise.reject();
          }));
        } else {
          validPromises.push(new Promise(function (resolve, reject) {
            if (error) {
              return reject();
            }

            if (ruleMethod(fieldElement, ruleParams)) {
              _this6.fields[fieldElement.getAttribute("name")].error = null;
              return resolve();
            } else {
              _this6.fields[fieldElement.getAttribute("name")].error = rule in _this6.fields[fieldElement.getAttribute("name")].customMessages ? _this6.fields[fieldElement.getAttribute("name")].customMessages[rule](ruleParams) : _this6.errorMessages[rule](ruleParams);
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

module.exports = Validator;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9WYWxpZGF0b3Ivd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1ZhbGlkYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9WYWxpZGF0b3IvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVmFsaWRhdG9yIiwiZm9ybSIsInNldHRpbmdzIiwicnVsZXMiLCJyZXF1aXJlZCIsImZpZWxkIiwidHlwZSIsImhhbmRsZUZvcm0iLCJxdWVyeVNlbGVjdG9yIiwibmFtZSIsInZhbHVlIiwibWluTGVuZ3RoIiwicGFyYW1zIiwibGVuZ3RoIiwibWF4TGVuZ3RoIiwibm90WmVybyIsInBhcnNlSW50IiwiaW50IiwiUmVnRXhwIiwidGVzdCIsImZsb2F0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwibWluIiwicGFyYW0iLCJwYXJzZUZsb2F0IiwibWF4IiwiZW1haWwiLCJkYXRlTWF4IiwidmFsdWVEYXRlIiwiRGF0ZSIsIm1heERhdGUiLCJkYXRlTGVzcyIsImxlc3NEYXRlIiwiZGF0ZSIsInJlZ0V4RGF0ZUZvcm1hdHMiLCJyZWdFeERhdGUiLCJtYXRjaCIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJjb25maXJtYXRpb24iLCJmaWVsZFRvQ29uZmlybSIsInJlbW90ZSIsImJvZHkiLCJuYW1lRGF0YSIsImRhdGEiLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImZldGNoIiwidXJsIiwidGhlbiIsInJlcyIsImpzb24iLCJjaGVjayIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmllbGRzIiwiX2dldEZpZWxkcyIsIm1lc3NhZ2VzIiwia2V5IiwiZXJyb3JNZXNzYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJfYWRkRXZlbnRDaGFuZ2UiLCJfYWRkRXZlbnRTdWJtaXQiLCJzdWJtaXQiLCJlIiwidmFsaWRhdGUiLCJ0YXJnZXQiLCJfaGlkZUVycm9ycyIsImNhdGNoIiwiX3Nob3dFcnJvcnMiLCJwcmV2ZW50RGVmYXVsdCIsImZpZWxkc05hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInZhbGlkZVByb21pc2VzRmllbGRzIiwiZm9yRWFjaCIsImZpZWxkTmFtZSIsImZpZWxkRWxlbWVudHMiLCJwdXNoIiwiYWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVTdWJtaXQiLCJldmVudHMiLCJldmVudCIsImZpZWxkRWxlbWVudCIsIl9oYW5kbGVDaGFuZ2UiLCJmaWVsZE5hbWVzIiwiY3VzdG9tTWVzc2FnZXMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXJyb3IiLCJrZXlGaWVsZCIsImdldEF0dHJpYnV0ZSIsInBhcmVudE5vZGUiLCJlcnJvckRpdk5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhZnRlciIsImlubmVySFRNTCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJydWxlc0ZvclRoaXNGaWVsZCIsInZhbGlkUHJvbWlzZXMiLCJydWxlIiwicnVsZVBhcmFtcyIsInJ1bGVNZXRob2QiLCJyZWR1Y2UiLCJwcm9taXNlQ2hhaW4iLCJjdXJyZW50VGFzayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztB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QUEvQyxHQUNFYSxJQUFJLElBQ0osTUFBSSxDQUFDbEQsTUFBTCxDQUFZOEIsWUFBWSxDQUFDUyxZQUFiLENBQTBCLE1BQTFCLENBQVosRUFBK0NOLGNBRC9DLEdBRUksTUFBSSxDQUFDakMsTUFBTCxDQUNFOEIsWUFBWSxDQUFDUyxZQUFiLENBQTBCLE1BQTFCLENBREYsRUFFRU4sY0FGRixDQUVpQmlCLElBRmpCLEVBRXVCQyxVQUZ2QixDQUZKLEdBS0ksTUFBSSxDQUFDL0MsYUFBTCxDQUFtQjhDLElBQW5CLEVBQXlCQyxVQUF6QixDQU5OO0FBT0FkLG1CQUFLLEdBQUcsSUFBUjtBQUNBLHFCQUFPdEMsTUFBTSxFQUFiO0FBQ0Q7QUFDRixXQW5CRCxDQURGO0FBc0JEO0FBQ0YsT0EvQ0Q7QUFpREEsYUFBT2tELGFBQWEsQ0FBQ0ksTUFBZCxDQUFxQixVQUFDQyxZQUFELEVBQWVDLFdBQWYsRUFBK0I7QUFDekQsZUFBT0QsWUFBWSxDQUFDN0QsSUFBYixDQUFrQjtBQUFBLGlCQUFNOEQsV0FBVyxDQUFDOUQsSUFBWixFQUFOO0FBQUEsU0FBbEIsQ0FBUDtBQUNELE9BRk0sRUFFSkksT0FBTyxDQUFDQyxPQUFSLEVBRkksQ0FBUDtBQUdEOzs7Ozs7QUFHSDBELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnZILFNBQWpCLEMiLCJmaWxlIjoiZm9ybS12YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJWYWxpZGF0b3JcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVmFsaWRhdG9yXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKGZvcm0sIHNldHRpbmdzKSB7XG4gICAgdGhpcy5ydWxlcyA9IHtcbiAgICAgIHJlcXVpcmVkOiBmaWVsZCA9PiB7XG4gICAgICAgIGlmKGZpZWxkLnR5cGUgPT09ICdyYWRpbycgfHwgZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIHJldHVybiAhIXRoaXMuaGFuZGxlRm9ybS5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiJHtmaWVsZC5uYW1lfVwiXTpjaGVja2VkYClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaWVsZC52YWx1ZSAhPT0gXCJcIjtcbiAgICAgIH0sXG5cbiAgICAgIG1pbkxlbmd0aDogKGZpZWxkLCBwYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLnZhbHVlLmxlbmd0aCA+PSBwYXJhbXM7XG4gICAgICB9LFxuXG4gICAgICBtYXhMZW5ndGg6IChmaWVsZCwgcGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC52YWx1ZS5sZW5ndGggPD0gcGFyYW1zO1xuICAgICAgfSxcblxuICAgICAgbm90WmVybzogZmllbGQgPT4ge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoZmllbGQudmFsdWUsIDEwKSA+IDA7XG4gICAgICB9LFxuXG4gICAgICBpbnQ6IGZpZWxkID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoL15bMC05XSskL2dpKS50ZXN0KGZpZWxkLnZhbHVlKTtcbiAgICAgIH0sXG5cbiAgICAgIGZsb2F0OiBmaWVsZCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZmllbGQudmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXCwvLCBcIi5cIik7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdGhpcy5pbnQodmFsdWUpIHx8IG5ldyBSZWdFeHAoL14oWzAtOV0pKyhcXC4pKFswLTldKyQpL2dpKS50ZXN0KHZhbHVlKVxuICAgICAgICApO1xuICAgICAgfSxcblxuICAgICAgbWluOiAoZmllbGQsIHBhcmFtKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZmllbGQudmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXCwvLCBcIi5cIik7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG5ldyBSZWdFeHAoL15bMC05XSskL2dpKS50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAgIG5ldyBSZWdFeHAoL14oWzAtOV0pKyhcXC4pKFswLTldKyQpL2dpKS50ZXN0KHZhbHVlKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgPj0gcGFyc2VGbG9hdChwYXJhbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCkgPj0gcGFyc2VJbnQocGFyYW0sIDEwKTtcbiAgICAgIH0sXG5cbiAgICAgIG1heDogKGZpZWxkLCBwYXJhbSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkLnZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFwsLywgXCIuXCIpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBuZXcgUmVnRXhwKC9eWzAtOV0rJC9naSkudGVzdCh2YWx1ZSkgfHxcbiAgICAgICAgICBuZXcgUmVnRXhwKC9eKFswLTldKSsoXFwuKShbMC05XSskKS9naSkudGVzdCh2YWx1ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIDw9IHBhcnNlRmxvYXQocGFyYW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApIDw9IHBhcnNlSW50KHBhcmFtLCAxMCk7XG4gICAgICB9LFxuXG4gICAgICBlbWFpbDogZmllbGQgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICAgICAvXigoXCJbXFx3LVxcc10rXCIpfChbXFx3XFwtXSsoPzpcXC5bXFx3XFwtXSspKil8KFwiW1xcdy1cXHNdK1wiKShbXFx3XFwtXSsoPzpcXC5bXFx3XFwtXSspKikpKEAoKD86W1xcd1xcLV0rXFwuKSpcXHdbXFx3XFwtXXswLDY2fSlcXC4oW2Etel17Miw2fSg/OlxcLlthLXpdezJ9KT8pJCl8KEBcXFs/KCgyNVswLTVdXFwufDJbMC00XVswLTldXFwufDFbMC05XXsyfVxcLnxbMC05XXsxLDJ9XFwuKSkoKDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldezJ9fFswLTldezEsMn0pXFwuKXsyfSgyNVswLTVdfDJbMC00XVswLTldfDFbMC05XXsyfXxbMC05XXsxLDJ9KVxcXT8kKS9pXG4gICAgICAgICkudGVzdChmaWVsZC52YWx1ZSk7XG4gICAgICB9LFxuXG4gICAgICBkYXRlTWF4OiAoZmllbGQsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZURhdGUgPSBuZXcgRGF0ZShmaWVsZC52YWx1ZSk7XG4gICAgICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdmFsdWVEYXRlIDw9IG1heERhdGU7XG4gICAgICB9LFxuXG4gICAgICBkYXRlTGVzczogKGZpZWxkLCBwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVEYXRlID0gbmV3IERhdGUoZmllbGQudmFsdWUpO1xuICAgICAgICBjb25zdCBsZXNzRGF0ZSA9IG5ldyBEYXRlKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB2YWx1ZURhdGUgPj0gbGVzc0RhdGU7XG4gICAgICB9LFxuXG4gICAgICBkYXRlOiAoZmllbGQsIHBhcmFtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ0V4RGF0ZUZvcm1hdHMgPSB7XG4gICAgICAgICAgXCJ5eXl5LW1tLWRkXCI6IC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLyxcbiAgICAgICAgICBcInl5eXkvbW0vZGRcIjogL15cXGR7NH1cXC9cXGR7Mn1cXC9cXGR7Mn0kL1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZWdFeERhdGUgPSByZWdFeERhdGVGb3JtYXRzW3BhcmFtXTtcbiAgICAgICAgaWYgKCFmaWVsZC52YWx1ZS5tYXRjaChyZWdFeERhdGUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmaWVsZC52YWx1ZSk7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApID09PSBmaWVsZC52YWx1ZTtcbiAgICAgIH0sXG5cbiAgICAgIGNvbmZpcm1hdGlvbjogKGZpZWxkLCBwYXJhbSkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZFRvQ29uZmlybSA9IHRoaXMuaGFuZGxlRm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBpbnB1dFtuYW1lPVwiJHtwYXJhbX1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBmaWVsZFRvQ29uZmlybS52YWx1ZSA9PT0gZmllbGQudmFsdWU7XG4gICAgICB9LFxuXG4gICAgICAuLi5zZXR0aW5ncy5ydWxlcyxcblxuICAgICAgcmVtb3RlOiAoZmllbGQsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0ge307XG4gICAgICAgIGJvZHlbcGFyYW1zLm5hbWVEYXRhXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIG1ldGhvZDogcGFyYW1zLm1ldGhvZCxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmV0Y2gocGFyYW1zLnVybCwgZGF0YSlcbiAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuY2hlY2soZGF0YSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlRm9ybSA9IGZvcm07XG4gICAgdGhpcy5maWVsZHMgPSB0aGlzLl9nZXRGaWVsZHMoc2V0dGluZ3MuZmllbGRzLCBzZXR0aW5ncy5tZXNzYWdlcyk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gc2V0dGluZ3MubWVzc2FnZXMpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MubWVzc2FnZXNba2V5XSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGRlbGV0ZSBzZXR0aW5ncy5tZXNzYWdlc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IHtcbiAgICAgIHJlcXVpcmVkOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3d3c1wiKTtcbiAgICAgICAgcmV0dXJuIFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiO1xuICAgICAgfSxcbiAgICAgIG1pbkxlbmd0aDogcGFyYW0gPT4gYFRoaXMgZmllbGQgbXVzdCBoYXZlIGF0IGxlYXN0ICR7cGFyYW19IGNoYXJhY3RlcnNgLFxuICAgICAgbWF4TGVuZ3RoOiBwYXJhbSA9PiBgVGhpcyBmaWVsZCBtdXN0IGhhdmUgbWF4ICR7cGFyYW19IGNoYXJhY3RlcnNgLFxuICAgICAgbm90WmVybzogKCkgPT4gXCJUaGlzIGZpZWxkIGNhbm5vdCBiZSB6ZXJvXCIsXG4gICAgICBpbnQ6ICgpID0+IFwiVGhpcyBmaWVsZCBtdXN0IGJlIGEgaW50ZWdlclwiLFxuICAgICAgZmxvYXQ6ICgpID0+IFwiVGhpcyBmaWVsZCBtdXN0IGJlIGEgZmxvYXRcIixcbiAgICAgIG1pbjogcGFyYW0gPT4gYFRoaXMgZmllbGQgbXVzdCBoYXZlIGJlIGdyZWF0ZXIgdGhhbiAke3BhcmFtfWAsXG4gICAgICBtYXg6IHBhcmFtID0+IGBUaGlzIGZpZWxkIG11c3QgaGF2ZSBiZSBsZXNzIHRoYW4gJHtwYXJhbX1gLFxuICAgICAgZW1haWw6ICgpID0+IFwiRW1haWwgYWRkcmVzcyBpcyBpbnZhbGlkXCIsXG4gICAgICByZW1vdGU6ICgpID0+IFwiSW52YWxpZCB2YWx1ZVwiLFxuICAgICAgZGF0ZU1heDogcGFyYW0gPT4gYFRoZSBtYXggZGF0ZSBpcyAke3BhcmFtfWAsXG4gICAgICBkYXRlTGVzczogcGFyYW0gPT4gYFRoZSBsZXNzIGRhdGUgaXMgJHtwYXJhbX1gLFxuICAgICAgZGF0ZTogcGFyYW0gPT4gYERhdGUgaXMgaW52YWxpZCBzaG91bGQgYmUgJHtwYXJhbX1gLFxuICAgICAgY29uZmlybWF0aW9uOiBwYXJhbSA9PiBgVGhpcyBmaWVsZCBzaG91bGQgYmUgZXF1YWxzIHRvICR7cGFyYW19YCxcbiAgICAgIC4uLnNldHRpbmdzLm1lc3NhZ2VzXG4gICAgfTtcblxuICAgIHRoaXMuX2FkZEV2ZW50Q2hhbmdlKCk7XG4gICAgdGhpcy5fYWRkRXZlbnRTdWJtaXQoKTtcbiAgICB0aGlzLnN1Ym1pdCA9IHNldHRpbmdzLnN1Ym1pdCB8fCBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIF9oYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMudmFsaWRhdGUoW2UudGFyZ2V0XSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5faGlkZUVycm9ycygpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3Nob3dFcnJvcnMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX2hhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZpZWxkc05hbWVzID0gT2JqZWN0LmtleXModGhpcy5maWVsZHMpO1xuICAgIGNvbnN0IHZhbGlkZVByb21pc2VzRmllbGRzID0gW107XG5cbiAgICBmaWVsZHNOYW1lcy5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XG4gICAgICBjb25zdCBmaWVsZEVsZW1lbnRzID0gdGhpcy5maWVsZHNbZmllbGROYW1lXVtcImZpZWxkRWxlbWVudHNcIl07XG5cbiAgICAgIHZhbGlkZVByb21pc2VzRmllbGRzLnB1c2godGhpcy52YWxpZGF0ZShmaWVsZEVsZW1lbnRzKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodmFsaWRlUHJvbWlzZXNGaWVsZHMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc3VibWl0KGUpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbnZpYW5kb1wiKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5fc2hvd0Vycm9ycygpO1xuICAgICAgfSk7XG4gIH1cblxuICBfYWRkRXZlbnRTdWJtaXQoKSB7XG4gICAgY29uc3QgZm9ybSA9IHRoaXMuaGFuZGxlRm9ybTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHRoaXMuX2hhbmRsZVN1Ym1pdChlKSk7XG4gIH1cblxuICBfYWRkRXZlbnRDaGFuZ2UoKSB7XG4gICAgY29uc3QgZmllbGRzTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmZpZWxkcyk7XG4gICAgY29uc3QgZXZlbnRzID0gW1wiY2hhbmdlXCIsIFwia2V5dXBcIiwgXCJwYXN0ZVwiLCBcImJsdXJcIl07XG5cbiAgICBmaWVsZHNOYW1lcy5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XG4gICAgICBjb25zdCBmaWVsZEVsZW1lbnRzID0gdGhpcy5maWVsZHNbZmllbGROYW1lXVtcImZpZWxkRWxlbWVudHNcIl07XG5cbiAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgZmllbGRFbGVtZW50cy5mb3JFYWNoKGZpZWxkRWxlbWVudCA9PiB7XG4gICAgICAgICAgZmllbGRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGUgPT4gdGhpcy5faGFuZGxlQ2hhbmdlKGUpKTtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldEZpZWxkcyhmaWVsZE5hbWVzLCBtZXNzYWdlcykge1xuICAgIGNvbnN0IGZpZWxkcyA9IHt9O1xuICAgIGxldCBjdXN0b21NZXNzYWdlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgZmllbGROYW1lIGluIGZpZWxkTmFtZXMpIHtcbiAgICAgIGN1c3RvbU1lc3NhZ2VzID0ge307XG4gICAgICBpZiAoXG4gICAgICAgIG1lc3NhZ2VzICYmXG4gICAgICAgIGZpZWxkTmFtZSBpbiBtZXNzYWdlcyAmJlxuICAgICAgICB0eXBlb2YgbWVzc2FnZXNbZmllbGROYW1lXSA9PSBcIm9iamVjdFwiXG4gICAgICApIHtcbiAgICAgICAgY3VzdG9tTWVzc2FnZXMgPSBtZXNzYWdlc1tmaWVsZE5hbWVdO1xuICAgICAgfVxuXG4gICAgICBmaWVsZHNbZmllbGROYW1lXSA9IHtcbiAgICAgICAgcnVsZXM6IGZpZWxkTmFtZXNbZmllbGROYW1lXSxcbiAgICAgICAgZmllbGRFbGVtZW50czogQXJyYXkuZnJvbSh0aGlzLmhhbmRsZUZvcm0ucXVlcnlTZWxlY3RvckFsbChgW25hbWU9JyR7ZmllbGROYW1lfSddYCkpLFxuICAgICAgICBjdXN0b21NZXNzYWdlczogY3VzdG9tTWVzc2FnZXMgfHwgY3VzdG9tTWVzc2FnZXMsXG4gICAgICAgIGVycm9yOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmaWVsZHM7XG4gIH1cblxuICBfc2hvd0Vycm9ycygpIHtcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmZpZWxkcztcblxuICAgIGZvciAodmFyIGtleUZpZWxkIGluIGZpZWxkcykge1xuICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNba2V5RmllbGRdO1xuICAgICAgY29uc3QgZmllbGRFbGVtZW50ID0gZmllbGRbXCJmaWVsZEVsZW1lbnRzXCJdW2ZpZWxkW1wiZmllbGRFbGVtZW50c1wiXS5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgICFmaWVsZEVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgIGBkaXZbZGF0YS1mb3JtLXZhbGlkYXRvcj1cIiR7ZmllbGROYW1lfVwiXWBcbiAgICAgICAgKS5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICBjb25zdCBlcnJvckRpdk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlcnJvckRpdk5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1mb3JtLXZhbGlkYXRvclwiLCBmaWVsZE5hbWUpO1xuICAgICAgICBmaWVsZEVsZW1lbnQuYWZ0ZXIoZXJyb3JEaXZOb2RlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXJyb3JEaXZOb2RlID0gZmllbGRFbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYGRpdltkYXRhLWZvcm0tdmFsaWRhdG9yPVwiJHtmaWVsZE5hbWV9XCJdYFxuICAgICAgKTtcblxuICAgICAgaWYgKGZpZWxkLmVycm9yKSB7XG4gICAgICAgIGVycm9yRGl2Tm9kZS5pbm5lckhUTUwgPSBmaWVsZC5lcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yRGl2Tm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlRXJyb3JzKCkge1xuICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuZmllbGRzO1xuXG4gICAgZm9yICh2YXIga2V5RmllbGQgaW4gZmllbGRzKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1trZXlGaWVsZF07XG4gICAgICBjb25zdCBmaWVsZEVsZW1lbnQgPSBmaWVsZFtcImZpZWxkRWxlbWVudHNcIl1bZmllbGRbXCJmaWVsZEVsZW1lbnRzXCJdLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgZXJyb3JEaXZOb2RlID0gZmllbGRFbGVtZW50LnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgXCJ2YWxpZGF0ZS1lcnJvclwiXG4gICAgICApWzBdO1xuXG4gICAgICBpZiAoZmllbGQuZXJyb3IpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yRGl2Tm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKGZpZWxkcykge1xuICAgIGNvbnN0IGZpZWxkRWxlbWVudCA9IGZpZWxkc1tmaWVsZHMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgcnVsZXNGb3JUaGlzRmllbGQgPSBPYmplY3Qua2V5cyhcbiAgICAgIHRoaXMuZmllbGRzW2ZpZWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXS5ydWxlc1xuICAgICk7XG4gICAgY29uc3QgZmllbGROYW1lID0gZmllbGRFbGVtZW50LmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XG4gICAgY29uc3QgdmFsaWRQcm9taXNlcyA9IFtdO1xuICAgIGxldCBlcnJvciA9IGZhbHNlO1xuXG4gICAgcnVsZXNGb3JUaGlzRmllbGQuZm9yRWFjaChydWxlID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVQYXJhbXMgPSB0aGlzLmZpZWxkc1tmaWVsZE5hbWVdLnJ1bGVzW3J1bGVdO1xuICAgICAgY29uc3QgcnVsZU1ldGhvZCA9IHRoaXMucnVsZXNbcnVsZV07XG5cbiAgICAgIGlmIChydWxlID09PSBcInJlbW90ZVwiICYmICFlcnJvcikge1xuICAgICAgICB2YWxpZFByb21pc2VzLnB1c2goXG4gICAgICAgICAgcnVsZU1ldGhvZChmaWVsZEVsZW1lbnQsIHJ1bGVQYXJhbXMpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZmllbGRzW2ZpZWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXS5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmZpZWxkc1tmaWVsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKV0uZXJyb3IgPVxuICAgICAgICAgICAgICAgIHJ1bGUgaW5cbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkc1tmaWVsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKV0uY3VzdG9tTWVzc2FnZXNcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5maWVsZHNbXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGRFbGVtZW50LmdldEF0dHJpYnV0ZShcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgXS5jdXN0b21NZXNzYWdlc1tydWxlXShydWxlUGFyYW1zKVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmVycm9yTWVzc2FnZXNbcnVsZV0ocnVsZVBhcmFtcyk7XG4gICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRQcm9taXNlcy5wdXNoKFxuICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChydWxlTWV0aG9kKGZpZWxkRWxlbWVudCwgcnVsZVBhcmFtcykpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWVsZHNbZmllbGRFbGVtZW50LmdldEF0dHJpYnV0ZShcIm5hbWVcIildLmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZmllbGRzW2ZpZWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXS5lcnJvciA9XG4gICAgICAgICAgICAgICAgcnVsZSBpblxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzW2ZpZWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXS5jdXN0b21NZXNzYWdlc1xuICAgICAgICAgICAgICAgICAgPyB0aGlzLmZpZWxkc1tcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICBdLmN1c3RvbU1lc3NhZ2VzW3J1bGVdKHJ1bGVQYXJhbXMpXG4gICAgICAgICAgICAgICAgICA6IHRoaXMuZXJyb3JNZXNzYWdlc1tydWxlXShydWxlUGFyYW1zKTtcbiAgICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWxpZFByb21pc2VzLnJlZHVjZSgocHJvbWlzZUNoYWluLCBjdXJyZW50VGFzaykgPT4ge1xuICAgICAgcmV0dXJuIHByb21pc2VDaGFpbi50aGVuKCgpID0+IGN1cnJlbnRUYXNrLnRoZW4oKSk7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmFsaWRhdG9yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
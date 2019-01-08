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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Validator =\n/*#__PURE__*/\nfunction () {\n  function Validator(form, settings) {\n    var _this = this;\n\n    _classCallCheck(this, Validator);\n\n    this.rules = _objectSpread({\n      required: function required(value) {\n        return value !== \"\";\n      },\n      minLength: function minLength(value, params) {\n        return value.length >= params;\n      },\n      maxLength: function maxLength(value, params) {\n        return value.length <= params;\n      },\n      notZero: function notZero(value) {\n        return parseInt(value, 10) > 0;\n      },\n      int: function int(value) {\n        return new RegExp(/^[0-9]+$/gi).test(value);\n      },\n      float: function float(value) {\n        value = value.toString().replace(/\\,/, \".\");\n        return _this.int(value) || new RegExp(/^([0-9])+(\\.)([0-9]+$)/gi).test(value);\n      },\n      min: function min(value, param) {\n        value = value.toString().replace(/\\,/, \".\");\n\n        if (new RegExp(/^[0-9]+$/gi).test(value) || new RegExp(/^([0-9])+(\\.)([0-9]+$)/gi).test(value)) {\n          return parseFloat(value) >= parseFloat(param);\n        }\n\n        return parseInt(value, 10) >= parseInt(param, 10);\n      },\n      max: function max(value, param) {\n        value = value.toString().replace(/\\,/, \".\");\n\n        if (new RegExp(/^[0-9]+$/gi).test(value) || new RegExp(/^([0-9])+(\\.)([0-9]+$)/gi).test(value)) {\n          return parseFloat(value) <= parseFloat(param);\n        }\n\n        return parseInt(value, 10) <= parseInt(param, 10);\n      },\n      email: function email(value) {\n        return new RegExp(/^((\"[\\w-\\s]+\")|([\\w\\-]+(?:\\.[\\w\\-]+)*)|(\"[\\w-\\s]+\")([\\w\\-]+(?:\\.[\\w\\-]+)*))(@((?:[\\w\\-]+\\.)*\\w[\\w\\-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$)|(@\\[?((25[0-5]\\.|2[0-4][0-9]\\.|1[0-9]{2}\\.|[0-9]{1,2}\\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\]?$)/i).test(value);\n      }\n    }, settings.customRules, {\n      remote: function remote(value, params) {\n        var body = {};\n        body[params.nameData] = value;\n        var data = {\n          method: params.method,\n          body: JSON.stringify(body),\n          headers: {\n            \"Content-Type\": \"application/json\"\n          }\n        };\n        return fetch(params.url, data).then(function (res) {\n          return res.json();\n        }).then(function (data) {\n          if (params.check(data)) {\n            return Promise.resolve();\n          } else {\n            return Promise.reject();\n          }\n        });\n      }\n    });\n    this.errorMessages = _objectSpread({\n      required: \"This field is required\",\n      minLength: \"This field must have at least {0} characters\",\n      maxLength: \"This field must have max {0} characters\",\n      notZero: \"This field cannot be zero\",\n      int: \"This field must be a integer\",\n      float: \"This field must be a float\",\n      min: \"This field must have be greater than {0}\",\n      max: \"This field must have be less than {0}\",\n      email: \"Email address is invalid\",\n      remote: \"Invalid value\"\n    }, settings.customMessages);\n    this.handleForm = form;\n    this.fields = this._getFields(settings.fields);\n\n    this._addEventChange();\n\n    this._addEventSubmit();\n  }\n\n  _createClass(Validator, [{\n    key: \"_handleChange\",\n    value: function _handleChange(e) {\n      var _this2 = this;\n\n      this.validate(e.target).then(function () {\n        _this2._hideErrors();\n      }).catch(function () {\n        _this2._showErrors();\n      });\n    }\n  }, {\n    key: \"_handleSubmit\",\n    value: function _handleSubmit(e) {\n      var _this3 = this;\n\n      var fieldsNames = Object.keys(this.fields);\n      var validePromisesFields = [];\n      fieldsNames.forEach(function (fieldName) {\n        var fieldElement = _this3.fields[fieldName][\"fieldElement\"];\n        validePromisesFields.push(_this3.validate(fieldElement));\n      });\n      Promise.all(validePromisesFields).then(function () {\n        return true;\n      }).catch(function () {\n        e.preventDefault();\n\n        _this3._showErrors();\n\n        return false;\n      });\n    }\n  }, {\n    key: \"_addEventSubmit\",\n    value: function _addEventSubmit() {\n      var _this4 = this;\n\n      var form = this.handleForm;\n      form.addEventListener(\"submit\", function (e) {\n        return _this4._handleSubmit(e);\n      });\n    }\n  }, {\n    key: \"_addEventChange\",\n    value: function _addEventChange() {\n      var _this5 = this;\n\n      var fieldsNames = Object.keys(this.fields);\n      fieldsNames.forEach(function (fieldName) {\n        var fieldElement = _this5.fields[fieldName][\"fieldElement\"];\n        fieldElement.addEventListener(\"keyup\", function (e) {\n          return _this5._handleChange(e);\n        });\n      });\n    }\n  }, {\n    key: \"_getFields\",\n    value: function _getFields(fieldNames) {\n      var fields = {};\n\n      for (var fieldName in fieldNames) {\n        fields[fieldName] = {\n          rules: fieldNames[fieldName],\n          fieldElement: this.handleForm.querySelector(\"[name='\".concat(fieldName, \"']\")),\n          error: null\n        };\n      }\n\n      return fields;\n    }\n  }, {\n    key: \"_showErrors\",\n    value: function _showErrors() {\n      var fields = this.fields;\n\n      for (var keyField in fields) {\n        var field = fields[keyField];\n        var fieldElement = field[\"fieldElement\"];\n\n        if (!fieldElement.parentNode.getElementsByClassName(\"validate-error\").length) {\n          var _errorDivNode = document.createElement(\"div\");\n\n          _errorDivNode.className = \"validate-error\";\n          fieldElement.parentNode.appendChild(_errorDivNode);\n        }\n\n        var errorDivNode = fieldElement.parentNode.getElementsByClassName(\"validate-error\")[0];\n\n        if (field.error) {\n          errorDivNode.innerHTML = field.error;\n        } else {\n          errorDivNode.innerHTML = \"\";\n        }\n      }\n    }\n  }, {\n    key: \"_hideErrors\",\n    value: function _hideErrors() {\n      var fields = this.fields;\n\n      for (var keyField in fields) {\n        var field = fields[keyField];\n        var fieldElement = field[\"fieldElement\"];\n        var errorDivNode = fieldElement.parentNode.getElementsByClassName(\"validate-error\")[0];\n\n        if (field.error) {\n          continue;\n        }\n\n        errorDivNode.innerHTML = \"\";\n      }\n    }\n  }, {\n    key: \"validate\",\n    value: function validate(field) {\n      var _this6 = this;\n\n      var fieldElement = field;\n      var rulesForThisField = Object.keys(this.fields[fieldElement.getAttribute(\"name\")].rules);\n      var fieldName = fieldElement.getAttribute(\"name\");\n      var validPromises = [];\n      var error = false;\n      rulesForThisField.forEach(function (rule) {\n        var ruleParams = _this6.fields[fieldName].rules[rule];\n        var ruleMethod = _this6.rules[rule];\n\n        if (rule === \"remote\" && !error) {\n          validPromises.push(ruleMethod(fieldElement.value, ruleParams).then(function () {\n            _this6.fields[fieldElement.getAttribute(\"name\")].error = null;\n            return Promise.resolve();\n          }).catch(function () {\n            _this6.fields[fieldElement.getAttribute(\"name\")].error = _this6.errorMessages[rule];\n            error = true;\n            return Promise.reject();\n          }));\n        } else {\n          validPromises.push(new Promise(function (resolve, reject) {\n            if (error) {\n              return reject();\n            }\n\n            if (ruleMethod(fieldElement.value, ruleParams)) {\n              _this6.fields[fieldElement.getAttribute(\"name\")].error = null;\n              return resolve();\n            } else {\n              _this6.fields[fieldElement.getAttribute(\"name\")].error = _this6.errorMessages[rule];\n              error = true;\n              return reject();\n            }\n          }));\n        }\n      });\n      return validPromises.reduce(function (promiseChain, currentTask) {\n        return promiseChain.then(function () {\n          return currentTask.then();\n        });\n      }, Promise.resolve());\n    }\n  }]);\n\n  return Validator;\n}();\n\nmodule.exports = Validator;\n\n//# sourceURL=webpack://Validator/./src/js/index.js?");

/***/ })

/******/ });
});
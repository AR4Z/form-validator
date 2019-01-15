!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Validator=t():e.Validator=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,i){var o=this;for(var a in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rules=r({required:function(e){return""!==e},minLength:function(e,t){return e.length>=t},maxLength:function(e,t){return e.length<=t},notZero:function(e){return parseInt(e,10)>0},int:function(e){return new RegExp(/^[0-9]+$/gi).test(e)},float:function(e){return e=e.toString().replace(/\,/,"."),o.int(e)||new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(e)},min:function(e,t){return e=e.toString().replace(/\,/,"."),new RegExp(/^[0-9]+$/gi).test(e)||new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(e)?parseFloat(e)>=parseFloat(t):parseInt(e,10)>=parseInt(t,10)},max:function(e,t){return e=e.toString().replace(/\,/,"."),new RegExp(/^[0-9]+$/gi).test(e)||new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(e)?parseFloat(e)<=parseFloat(t):parseInt(e,10)<=parseInt(t,10)},email:function(e){return new RegExp(/^(("[\w-\s]+")|([\w\-]+(?:\.[\w\-]+)*)|("[\w-\s]+")([\w\-]+(?:\.[\w\-]+)*))(@((?:[\w\-]+\.)*\w[\w\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e)},dateMax:function(e,t){return new Date(e)<=new Date(t)},dateLess:function(e,t){return new Date(e)>=new Date(t)},date:function(e,t){var n={"yyyy-mm-dd":/^\d{4}-\d{2}-\d{2}$/,"yyyy/mm/dd":/^\d{4}\/\d{2}\/\d{2}$/}[t];if(!e.match(n))return!1;var r=new Date(e);return!Number.isNaN(r.getTime())&&r.toISOString().slice(0,10)===e},confirmation:function(e,t){return o.handleForm.querySelector('input[name="'.concat(t,'"]')).value==e}},i.rules,{remote:function(e,t){var n={};n[t.nameData]=e;var r={method:t.method,body:JSON.stringify(n),headers:{"Content-Type":"application/json"}};return fetch(t.url,r).then(function(e){return e.json()}).then(function(e){return t.check(e)?Promise.resolve():Promise.reject()})}}),this.handleForm=t,this.fields=this._getFields(i.fields,i.messages),i.messages)"object"==n(i.messages[a])&&delete i.messages[a];this.errorMessages=r({required:function(){return console.log("swws"),"This field is required"},minLength:function(e){return"This field must have at least ".concat(e," characters")},maxLength:function(e){return"This field must have max ".concat(e," characters")},notZero:function(){return"This field cannot be zero"},int:function(){return"This field must be a integer"},float:function(){return"This field must be a float"},min:function(e){return"This field must have be greater than ".concat(e)},max:function(e){return"This field must have be less than ".concat(e)},email:function(){return"Email address is invalid"},remote:function(){return"Invalid value"},dateMax:function(e){return"The max date is ".concat(e)},dateLess:function(e){return"The less date is ".concat(e)},date:function(e){return"Date is invalid should be ".concat(e)},confirmation:function(e){return"This field should be equals to ".concat(e)}},i.messages),this._addEventChange(),this._addEventSubmit(),this.submit=i.submit||Promise.resolve()}var t,i,a;return t=e,(i=[{key:"_handleChange",value:function(e){var t=this;this.validate(e.target).then(function(){t._hideErrors()}).catch(function(){t._showErrors()})}},{key:"_handleSubmit",value:function(e){var t=this;e.preventDefault();var n=Object.keys(this.fields),r=[];return n.forEach(function(e){var n=t.fields[e].fieldElement;r.push(t.validate(n))}),Promise.all(r).then(function(){t.submit(e).then(function(){console.log("Enviando"),t.handleForm.submit()}).catch(function(){return!1})}).catch(function(){t._showErrors()})}},{key:"_addEventSubmit",value:function(){var e=this;this.handleForm.addEventListener("submit",function(t){return e._handleSubmit(t)})}},{key:"_addEventChange",value:function(){var e=this,t=Object.keys(this.fields),n=["change","keyup","paste","blur"];t.forEach(function(t){var r=e.fields[t].fieldElement;n.forEach(function(t){r.addEventListener(t,function(t){return e._handleChange(t)})})})}},{key:"_getFields",value:function(e,t){var r={},i={};for(var o in e)i={},t&&o in t&&"object"==n(t[o])&&(i=t[o]),r[o]={rules:e[o],fieldElement:this.handleForm.querySelector("[name='".concat(o,"']")),customMessages:i||i,error:null};return r}},{key:"_showErrors",value:function(){var e=this.fields;for(var t in e){var n=e[t],r=n.fieldElement,i=r.getAttribute("name");if(!r.parentNode.querySelectorAll('div[data-form-validator="'.concat(i,'"]')).length){var o=document.createElement("div");o.setAttribute("data-form-validator",i),r.after(o)}var a=r.parentNode.querySelector('div[data-form-validator="'.concat(i,'"]'));n.error?a.innerHTML=n.error:a.innerHTML=""}}},{key:"_hideErrors",value:function(){var e=this.fields;for(var t in e){var n=e[t],r=n.fieldElement.parentNode.getElementsByClassName("validate-error")[0];n.error||(r.innerHTML="")}}},{key:"validate",value:function(e){var t=this,n=e,r=Object.keys(this.fields[n.getAttribute("name")].rules),i=n.getAttribute("name"),o=[],a=!1;return r.forEach(function(e){var r=t.fields[i].rules[e],u=t.rules[e];"remote"!==e||a?o.push(new Promise(function(i,o){return a?o():u(n.value,r)?(t.fields[n.getAttribute("name")].error=null,i()):(t.fields[n.getAttribute("name")].error=e in t.fields[n.getAttribute("name")].customMessages?t.fields[n.getAttribute("name")].customMessages[e](r):t.errorMessages[e](r),a=!0,o())})):o.push(u(n.value,r).then(function(){return t.fields[n.getAttribute("name")].error=null,Promise.resolve()}).catch(function(){return t.fields[n.getAttribute("name")].error=e in t.fields[n.getAttribute("name")].customMessages?t.fields[n.getAttribute("name")].customMessages[e](r):t.errorMessages[e](r),a=!0,Promise.reject()}))}),o.reduce(function(e,t){return e.then(function(){return t.then()})},Promise.resolve())}}])&&o(t.prototype,i),a&&o(t,a),e}();e.exports=a}])});
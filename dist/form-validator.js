!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Validator=t():e.Validator=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),i.forEach(function(t){n(e,t,r[t])})}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rules=r({required:function(e){return""!==e},minLength:function(e,t){return e.length>=t},maxLength:function(e,t){return e.length<=t},notZero:function(e){return parseInt(e,10)>0},int:function(e){return new RegExp(/^[0-9]+$/gi).test(e)},float:function(e){return e=e.toString().replace(/\,/,"."),i.int(e)||new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(e)},min:function(e,t){return e=e.toString().replace(/\,/,"."),new RegExp(/^[0-9]+$/gi).test(e)||new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(e)?parseFloat(e)>=parseFloat(t):parseInt(e,10)>=parseInt(t,10)},max:function(e,t){return e=e.toString().replace(/\,/,"."),new RegExp(/^[0-9]+$/gi).test(e)||new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(e)?parseFloat(e)<=parseFloat(t):parseInt(e,10)<=parseInt(t,10)},email:function(e){return new RegExp(/^(("[\w-\s]+")|([\w\-]+(?:\.[\w\-]+)*)|("[\w-\s]+")([\w\-]+(?:\.[\w\-]+)*))(@((?:[\w\-]+\.)*\w[\w\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e)},dateMax:function(e,t){return new Date(e)<=new Date(t)},dateLess:function(e,t){return new Date(e)>=new Date(t)}},n.customRules,{remote:function(e,t){var r={};r[t.nameData]=e;var n={method:t.method,body:JSON.stringify(r),headers:{"Content-Type":"application/json"}};return fetch(t.url,n).then(function(e){return e.json()}).then(function(e){return t.check(e)?Promise.resolve():Promise.reject()})}}),this.errorMessages=r({required:"This field is required",minLength:"This field must have at least {0} characters",maxLength:"This field must have max {0} characters",notZero:"This field cannot be zero",int:"This field must be a integer",float:"This field must be a float",min:"This field must have be greater than {0}",max:"This field must have be less than {0}",email:"Email address is invalid",remote:"Invalid value",dateMax:"The max date is {0}",dateLess:"The less date is {0}"},n.customMessages),this.handleForm=t,this.fields=this._getFields(n.fields),this._addEventChange(),this._addEventSubmit()}var t,n,a;return t=e,(n=[{key:"_handleChange",value:function(e){var t=this;this.validate(e.target).then(function(){t._hideErrors()}).catch(function(){t._showErrors()})}},{key:"_handleSubmit",value:function(e){var t=this,r=Object.keys(this.fields),n=[];r.forEach(function(e){var r=t.fields[e].fieldElement;n.push(t.validate(r))}),Promise.all(n).then(function(){return!0}).catch(function(){return e.preventDefault(),t._showErrors(),!1})}},{key:"_addEventSubmit",value:function(){var e=this;this.handleForm.addEventListener("submit",function(t){return e._handleSubmit(t)})}},{key:"_addEventChange",value:function(){var e=this;Object.keys(this.fields).forEach(function(t){e.fields[t].fieldElement.addEventListener("keyup",function(t){return e._handleChange(t)})})}},{key:"_getFields",value:function(e){var t={};for(var r in e)t[r]={rules:e[r],fieldElement:this.handleForm.querySelector("[name='".concat(r,"']")),error:null};return t}},{key:"_showErrors",value:function(){var e=this.fields;for(var t in e){var r=e[t],n=r.fieldElement;if(!n.parentNode.getElementsByClassName("validate-error").length){var i=document.createElement("div");i.className="validate-error",n.parentNode.appendChild(i)}var a=n.parentNode.getElementsByClassName("validate-error")[0];r.error?a.innerHTML=r.error:a.innerHTML=""}}},{key:"_hideErrors",value:function(){var e=this.fields;for(var t in e){var r=e[t],n=r.fieldElement.parentNode.getElementsByClassName("validate-error")[0];r.error||(n.innerHTML="")}}},{key:"validate",value:function(e){var t=this,r=e,n=Object.keys(this.fields[r.getAttribute("name")].rules),i=r.getAttribute("name"),a=[],o=!1;return n.forEach(function(e){var n=t.fields[i].rules[e],u=t.rules[e];"remote"!==e||o?a.push(new Promise(function(i,a){return o?a():u(r.value,n)?(t.fields[r.getAttribute("name")].error=null,i()):(t.fields[r.getAttribute("name")].error=t.errorMessages[e],o=!0,a())})):a.push(u(r.value,n).then(function(){return t.fields[r.getAttribute("name")].error=null,Promise.resolve()}).catch(function(){return t.fields[r.getAttribute("name")].error=t.errorMessages[e],o=!0,Promise.reject()}))}),a.reduce(function(e,t){return e.then(function(){return t.then()})},Promise.resolve())}}])&&i(t.prototype,n),a&&i(t,a),e}();e.exports=a}])});
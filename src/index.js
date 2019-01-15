class Validator {
  constructor(form, settings) {
    this.rules = {
      required: field => {
        if(field.type === 'radio' || field.type === 'checkbox') {
          return !!this.handleForm.querySelector(`input[name="${field.name}"]:checked`)
        }

        return field.value !== "";
      },

      minLength: (field, params) => {
        return field.value.length >= params;
      },

      maxLength: (field, params) => {
        return field.value.length <= params;
      },

      notZero: field => {
        return parseInt(field.value, 10) > 0;
      },

      int: field => {
        return new RegExp(/^[0-9]+$/gi).test(field.value);
      },

      float: field => {
        const value = field.value.toString().replace(/\,/, ".");
        return (
          this.int(value) || new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(value)
        );
      },

      min: (field, param) => {
        const value = field.value.toString().replace(/\,/, ".");

        if (
          new RegExp(/^[0-9]+$/gi).test(value) ||
          new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(value)
        ) {
          return parseFloat(value) >= parseFloat(param);
        }
        return parseInt(value, 10) >= parseInt(param, 10);
      },

      max: (field, param) => {
        const value = field.value.toString().replace(/\,/, ".");

        if (
          new RegExp(/^[0-9]+$/gi).test(value) ||
          new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(value)
        ) {
          return parseFloat(value) <= parseFloat(param);
        }
        return parseInt(value, 10) <= parseInt(param, 10);
      },

      email: field => {
        return new RegExp(
          /^(("[\w-\s]+")|([\w\-]+(?:\.[\w\-]+)*)|("[\w-\s]+")([\w\-]+(?:\.[\w\-]+)*))(@((?:[\w\-]+\.)*\w[\w\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        ).test(field.value);
      },

      dateMax: (field, params) => {
        const valueDate = new Date(field.value);
        const maxDate = new Date(params);
        return valueDate <= maxDate;
      },

      dateLess: (field, params) => {
        const valueDate = new Date(field.value);
        const lessDate = new Date(params);
        return valueDate >= lessDate;
      },

      date: (field, param) => {
        const regExDateFormats = {
          "yyyy-mm-dd": /^\d{4}-\d{2}-\d{2}$/,
          "yyyy/mm/dd": /^\d{4}\/\d{2}\/\d{2}$/
        };
        const regExDate = regExDateFormats[param];
        if (!field.value.match(regExDate)) return false;
        const date = new Date(field.value);
        if (Number.isNaN(date.getTime())) return false;
        return date.toISOString().slice(0, 10) === field.value;
      },

      confirmation: (field, param) => {
        const fieldToConfirm = this.handleForm.querySelector(
          `input[name="${param}"]`
        );
        return fieldToConfirm.value === field.value;
      },

      ...settings.rules,

      remote: (field, params) => {
        const body = {};
        body[params.nameData] = field.value;
        const data = {
          method: params.method,
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        };

        return fetch(params.url, data)
          .then(res => res.json())
          .then(data => {
            if (params.check(data)) {
              return Promise.resolve();
            } else {
              return Promise.reject();
            }
          });
      }
    };

    this.handleForm = form;
    this.fields = this._getFields(settings.fields, settings.messages);

    for (let key in settings.messages) {
      if (typeof settings.messages[key] == "object") {
        delete settings.messages[key];
      }
    }

    this.errorMessages = {
      required: () => {
        console.log("swws");
        return "This field is required";
      },
      minLength: param => `This field must have at least ${param} characters`,
      maxLength: param => `This field must have max ${param} characters`,
      notZero: () => "This field cannot be zero",
      int: () => "This field must be a integer",
      float: () => "This field must be a float",
      min: param => `This field must have be greater than ${param}`,
      max: param => `This field must have be less than ${param}`,
      email: () => "Email address is invalid",
      remote: () => "Invalid value",
      dateMax: param => `The max date is ${param}`,
      dateLess: param => `The less date is ${param}`,
      date: param => `Date is invalid should be ${param}`,
      confirmation: param => `This field should be equals to ${param}`,
      ...settings.messages
    };

    this._addEventChange();
    this._addEventSubmit();
    this.submit = settings.submit || Promise.resolve();
  }

  _handleChange(e) {
    this.validate([e.target])
      .then(() => {
        this._hideErrors();
      })
      .catch(() => {
        this._showErrors();
      });
  }

  _handleSubmit(e) {
    e.preventDefault();
    const fieldsNames = Object.keys(this.fields);
    const validePromisesFields = [];

    fieldsNames.forEach(fieldName => {
      const fieldElements = this.fields[fieldName]["fieldElements"];

      validePromisesFields.push(this.validate(fieldElements));
    });

    return Promise.all(validePromisesFields)
      .then(() => {
        this.submit(e)
          .then(() => {
            console.log("Enviando");
            this.handleForm.submit();
          })
          .catch(() => false);
      })
      .catch(() => {
        this._showErrors();
      });
  }

  _addEventSubmit() {
    const form = this.handleForm;

    form.addEventListener("submit", e => this._handleSubmit(e));
  }

  _addEventChange() {
    const fieldsNames = Object.keys(this.fields);
    const events = ["change", "keyup", "paste", "blur"];

    fieldsNames.forEach(fieldName => {
      const fieldElements = this.fields[fieldName]["fieldElements"];

      events.forEach(event => {
        fieldElements.forEach(fieldElement => {
          fieldElement.addEventListener(event, e => this._handleChange(e));
        })
      });
    });
  }

  _getFields(fieldNames, messages) {
    const fields = {};
    let customMessages = {};

    for (var fieldName in fieldNames) {
      customMessages = {};
      if (
        messages &&
        fieldName in messages &&
        typeof messages[fieldName] == "object"
      ) {
        customMessages = messages[fieldName];
      }

      fields[fieldName] = {
        rules: fieldNames[fieldName],
        fieldElements: Array.from(this.handleForm.querySelectorAll(`[name='${fieldName}']`)),
        customMessages: customMessages || customMessages,
        error: null
      };
    }

    return fields;
  }

  _showErrors() {
    const fields = this.fields;

    for (var keyField in fields) {
      const field = fields[keyField];
      const fieldElement = field["fieldElements"][field["fieldElements"].length - 1];
      const fieldName = fieldElement.getAttribute("name");

      if (
        !fieldElement.parentNode.querySelectorAll(
          `div[data-form-validator="${fieldName}"]`
        ).length
      ) {
        const errorDivNode = document.createElement("div");
        errorDivNode.setAttribute("data-form-validator", fieldName);
        fieldElement.after(errorDivNode);
      }

      const errorDivNode = fieldElement.parentNode.querySelector(
        `div[data-form-validator="${fieldName}"]`
      );

      if (field.error) {
        errorDivNode.innerHTML = field.error;
      } else {
        errorDivNode.innerHTML = "";
      }
    }
  }

  _hideErrors() {
    const fields = this.fields;

    for (var keyField in fields) {
      const field = fields[keyField];
      const fieldElement = field["fieldElements"][field["fieldElements"].length - 1];
      const errorDivNode = fieldElement.parentNode.getElementsByClassName(
        "validate-error"
      )[0];

      if (field.error) {
        continue;
      }

      errorDivNode.innerHTML = "";
    }
  }

  validate(fields) {
    const fieldElement = fields[fields.length - 1];
    const rulesForThisField = Object.keys(
      this.fields[fieldElement.getAttribute("name")].rules
    );
    const fieldName = fieldElement.getAttribute("name");
    const validPromises = [];
    let error = false;

    rulesForThisField.forEach(rule => {
      const ruleParams = this.fields[fieldName].rules[rule];
      const ruleMethod = this.rules[rule];

      if (rule === "remote" && !error) {
        validPromises.push(
          ruleMethod(fieldElement, ruleParams)
            .then(() => {
              this.fields[fieldElement.getAttribute("name")].error = null;
              return Promise.resolve();
            })
            .catch(() => {
              this.fields[fieldElement.getAttribute("name")].error =
                rule in
                this.fields[fieldElement.getAttribute("name")].customMessages
                  ? this.fields[
                      fieldElement.getAttribute("name")
                    ].customMessages[rule](ruleParams)
                  : this.errorMessages[rule](ruleParams);
              error = true;
              return Promise.reject();
            })
        );
      } else {
        validPromises.push(
          new Promise((resolve, reject) => {
            if (error) {
              return reject();
            }

            if (ruleMethod(fieldElement, ruleParams)) {
              this.fields[fieldElement.getAttribute("name")].error = null;
              return resolve();
            } else {
              this.fields[fieldElement.getAttribute("name")].error =
                rule in
                this.fields[fieldElement.getAttribute("name")].customMessages
                  ? this.fields[
                      fieldElement.getAttribute("name")
                    ].customMessages[rule](ruleParams)
                  : this.errorMessages[rule](ruleParams);
              error = true;
              return reject();
            }
          })
        );
      }
    });

    return validPromises.reduce((promiseChain, currentTask) => {
      return promiseChain.then(() => currentTask.then());
    }, Promise.resolve());
  }
}

module.exports = Validator;

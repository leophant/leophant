'use strict';

const Model = require('./model');

class DataSource {
  constructor(definition, options) {
    this.definition = definition;
    this.connector = null;
    this.models = {};
  }

  registerModel(definition, options) {
    const modelClass = class extends Model {};
    modelClass.init(definition, options);
    this.models[definition.name] = modelClass;
    return modelClass;
  }

  unregisterModel(name) {
    delete this.models[name];
  }
}

module.exports = DataSource;

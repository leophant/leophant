'use strict';

const Model = require('./model');

class DataSource {
  constructor(definition, options) {
    if(['mysql', 'postgresql'].indexOf(definition.connector) < 0) {
      throw new Error(`Unsupported connector name passed: '${definition.connector}'. Please use one of: 'mysql', 'postgresql'.`);
    }

    // TODO: move connectors to separate packages?
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

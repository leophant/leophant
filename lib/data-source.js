'use strict';

const Model = require('./model');

class DataSource {
  constructor(definition, options) {
    this.definition = definition;
    this.connector = this._createConnector(definition.connector);
    this.models = {};
  }

  _createConnector(connectorClass) {
    // TODO: validate the connectorClass
    return new connectorClass(this.definition);
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

'use strict';

const Model = require('./model');

class DataSource {
  constructor(definition, options) {
    // TODO: validate definition
    this.definition = definition;
    this.connector = this._createConnector(definition.connector);
    this.models = {};
  }

  _createConnector(connectorClass) {
    // TODO: validate the connectorClass
    return new connectorClass(this.definition);
  }

  registerModel(definition, options) {
    this.models[definition.name] = Model.init(definition, options);
    return this.models[definition.name];
  }

  unregisterModel(name) {
    delete this.models[name];
  }
}

module.exports = DataSource;

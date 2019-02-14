'use strict';

const ConnectorValidator = require('./validators/connector');
const DataSourceValidator = require('./validators/data-source');
const Model = require('./model');
const ModelValidator = require('./validators/model');

class DataSource {
  constructor(definition, options) {
    DataSourceValidator.validateDefinition(definition);

    this.definition = definition;
    this.connector = this._createConnector(definition.connector);
    this.models = {};
  }

  _createConnector(connectorClass) {
    ConnectorValidator.validateConnectorClass(connectorClass);

    return new connectorClass(this.definition);
  }

  registerModel(definition, options) {
    ModelValidator.validateDefinition(definition);

    // TODO: print a warning if the model with such name already exists
    this.models[definition.name] = Model.init(definition, options);
    return this.models[definition.name];
  }

  unregisterModel(name) {
    delete this.models[name];
  }
}

module.exports = DataSource;

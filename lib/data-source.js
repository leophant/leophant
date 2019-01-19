'use strict';

const Model = require('./model');

class DataSource {
  constructor(definition, options) {
    this.definition = definition;
    this.connector = this._resolveConnector(definition.connector);
    this.models = {};
  }

  _resolveConnector(connector) {
    if(['mysql', 'postgresql'].indexOf(connector) < 0) {
      throw new Error(`Unsupported connector name passed: '${connector}'. Please use one of: 'mysql', 'postgresql'.`);
    }

    // TODO: create separate packages for connectors
    return require(`./connectors/${connector}`)(this);
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

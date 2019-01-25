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

    // TODO: throw a meaningful error if connector is not installed
    // TODO: make it possible to use already resolved connector
    return require(`leophant-${connector}`)(this);
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

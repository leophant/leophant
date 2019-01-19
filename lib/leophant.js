'use strict';

const DataSource = require('./data-source');

class Leophant {
  constructor(options = {}) {
    this.dataSources = {};

    if(options.dataSources) {
      for(const dataSourceDefinition of options.dataSources) {
        this.registerDataSource(dataSourceDefinition, options);
      }
    }

    if(options.models) {
      for(const modelConfig of options.models) {
        this.dataSources[modelConfig.dataSource].registerModel(modelConfig.definition, options);
      }
    }
  }

  registerDataSource(definition, options) {
    this.dataSources[definition.name] = new DataSource(definition, options);
    return this.dataSources[definition.name];
  }

  unregisterDataSource(name) {
    delete this.dataSources[name];
  }
}

module.exports = Leophant;

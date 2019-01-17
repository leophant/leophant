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
  }

  registerDataSource(definition, options) {
    const dataSource = new DataSource(definition, options);
    this.dataSources[definition.name] = dataSource;
    return dataSource;
  }

  unregisterDataSource(name) {
    delete this.dataSources[name];
  }
}

module.exports = Leophant;

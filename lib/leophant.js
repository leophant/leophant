'use strict';

const DataSource = require('./data-source');
const Model      = require('./model');

class Leophant {
  constructor(options) {
    if(!options) {
      options = {};
    }

    this.dataSources = {};

    if(options.dataSources) {
      for(const dataSourceDefinition of options.dataSources) {
        this.registerDataSource(dataSourceDefinition, options);
      }

      if(options.models) {
        for(const modelDefinition of options.models) {
          this.dataSources[modelDefinition.dataSource].registerModel(modelDefinition, options);
        }
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

Leophant.DataSource = DataSource;
Leophant.Model      = Model;

module.exports = Leophant;

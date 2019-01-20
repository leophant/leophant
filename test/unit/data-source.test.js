const { expect } = require('chai');
const { DataSource, Model, validDataSourceDefinition, validModelDefinition } = require('../support');

const dataSourceConstructor = (definition) => {
  return () => {
    new DataSource(definition);
  };
};

describe('DataSource', () => {
  describe('constructor', () => {
    it('should throw error when unsupported connector is supplied', () => {
      const definition = { ...validDataSourceDefinition, connector: 'unsupported' };
      expect(dataSourceConstructor(definition)).to.throw(Error);
    });

    it('should work when supported connector is supplied', () => {
      const supportedConnectors = ['mysql', 'postgresql'];

      for(const connector of supportedConnectors) {
        const definition = { ...validDataSourceDefinition, connector };
        expect(dataSourceConstructor(definition)).not.to.throw(Error);
      }
    });
  });

  describe('registerModel', () => {
    it('should register a model class and return it', () => {
      const dataSource = new DataSource(validDataSourceDefinition);

      const modelClass = dataSource.registerModel(validModelDefinition);
      expect(modelClass).to.be.a('function');
      expect(modelClass.prototype).to.be.an.instanceOf(Model);
      expect(modelClass).to.equal(dataSource.models[validModelDefinition.name]);
    });
  });

  describe('unregisterModel', () => {
    it('should unregister a model', () => {
      const dataSource = new DataSource(validDataSourceDefinition);

      dataSource.registerModel(validModelDefinition);
      expect(dataSource.models[validModelDefinition.name]).to.be.a('function');

      dataSource.unregisterModel(validModelDefinition.name);
      expect(dataSource.models[validModelDefinition.name]).to.be.undefined;
    });
  });
});

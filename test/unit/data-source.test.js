const { expect }          = require('chai');
const MySQLConnector      = require('leophant-mysql');
const PostgreSQLConnector = require('leophant-postgresql');
const {
  DataSource,
  Model,
  validDataSourceDefinition,
  validModelDefinition
} = require('../support');

const dataSourceConstructor = (definition) => {
  return () => {
    new DataSource(definition);
  };
};

describe('DataSource', () => {
  describe('constructor', () => {
    it('should throw error when unsupported connector is supplied', () => {
      // TODO: test that connector validation works
      expect(true).to.not.equal(false);
    });

    it('should work when supported connector is supplied', () => {
      const supportedConnectors = [MySQLConnector, PostgreSQLConnector];

      for (const connector of supportedConnectors) {
        const definition = { ...validDataSourceDefinition, connector };
        expect(dataSourceConstructor(definition)).not.to.throw(Error);
      }
    });
  });

  describe('registerModel', () => {
    it('should register a model class and return it', () => {
      const dataSource = new DataSource(validDataSourceDefinition);

      const modelClass = dataSource.registerModel(validModelDefinition);
      expect(modelClass.prototype).to.be.an.instanceOf(Model);
      expect(modelClass).to.equal(dataSource.models[validModelDefinition.name]);
    });
  });

  describe('unregisterModel', () => {
    it('should unregister a model', () => {
      const dataSource = new DataSource(validDataSourceDefinition);

      dataSource.registerModel(validModelDefinition);
      expect(dataSource.models[validModelDefinition.name].prototype).to.be.an.instanceOf(Model);

      dataSource.unregisterModel(validModelDefinition.name);
      expect(dataSource.models[validModelDefinition.name]).to.be.undefined;
    });
  });
});

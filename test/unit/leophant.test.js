const { expect } = require('chai');
const { DataSource, Leophant, validDataSourceDefinition } = require('../support');

describe('Leophant', () => {
  describe('registerDataSource', () => {
    it('should register a DataSource and return it', () => {
      const leophant = new Leophant();

      const dataSource = leophant.registerDataSource(validDataSourceDefinition);
      expect(dataSource).to.be.an.instanceOf(DataSource);
      expect(dataSource).to.equal(leophant.dataSources[validDataSourceDefinition.name]);
    });
  });

  describe('unregisterDataSource', () => {
    it('should unregister a DataSource', () => {
      const leophant = new Leophant();

      leophant.registerDataSource(validDataSourceDefinition);
      expect(leophant.dataSources[validDataSourceDefinition.name]).to.be.an.instanceOf(DataSource);

      leophant.unregisterDataSource(validDataSourceDefinition.name);
      expect(leophant.dataSources[validDataSourceDefinition.name]).to.be.undefined;
    });
  });
});

const { expect } = require('chai');
const { DataSource, Leophant, Model, validDataSourceDefinition, validModelDefinition } = require('../support');

describe('Leophant', () => {
  describe('constructor', () => {
    it('should register dataSources passed via options', () => {
      const leophant = new Leophant({
        dataSources: [
          { ...validDataSourceDefinition, name: 'db1' },
          { ...validDataSourceDefinition, name: 'db2' }
        ]
      });

      expect(Object.keys(leophant.dataSources)).to.have.lengthOf(2);
      expect(leophant.dataSources.db1).to.be.an.instanceOf(DataSource);
      expect(leophant.dataSources.db2).to.be.an.instanceOf(DataSource);
    });

    it('should register models passed via options', () => {
      const leophant = new Leophant({
        dataSources: [
          { ...validDataSourceDefinition, name: 'db1' },
          { ...validDataSourceDefinition, name: 'db2' }
        ],
        models: [
          { ...validModelDefinition, name: 'Model1', dataSource: 'db1' },
          { ...validModelDefinition, name: 'Model2', dataSource: 'db2' }
        ]
      });

      expect(Object.keys(leophant.dataSources.db1.models)).to.have.lengthOf(1);
      expect(Object.keys(leophant.dataSources.db2.models)).to.have.lengthOf(1);
      expect(leophant.dataSources.db1.models.Model1.prototype).to.be.an.instanceOf(Model);
      expect(leophant.dataSources.db2.models.Model2.prototype).to.be.an.instanceOf(Model);
    });
  });

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

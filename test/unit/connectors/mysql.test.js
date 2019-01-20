const { expect } = require('chai');
const { DataSource, validDataSourceDefinition, initializeMySQLConnector } = require('../../support');

describe('MySQLConnector', () => {
  describe('connect', () => {
    it('should be defined', () => {
      const dataSource = new DataSource(validDataSourceDefinition);
      const connector = initializeMySQLConnector(dataSource);

      expect(connector.connect).to.be.a('function');
    });
  });

  describe('disconnect', () => {
    it('should be defined', () => {
      const dataSource = new DataSource(validDataSourceDefinition);
      const connector = initializeMySQLConnector(dataSource);

      expect(connector.disconnect).to.be.a('function');
    });
  });
});

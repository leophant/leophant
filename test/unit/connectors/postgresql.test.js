const { expect } = require('chai');
const { DataSource, validDataSourceDefinition, initializePostgreSQLConnector } = require('../../support');

describe('PostgreSQLConnector', () => {
  describe('connect', () => {
    it('should be defined', () => {
      const dataSource = new DataSource(validDataSourceDefinition);
      const connector = initializePostgreSQLConnector(dataSource);

      expect(connector.connect).to.be.a('function');
    });
  });

  describe('disconnect', () => {
    it('should be defined', () => {
      const dataSource = new DataSource(validDataSourceDefinition);
      const connector = initializePostgreSQLConnector(dataSource);

      expect(connector.disconnect).to.be.a('function');
    });
  });
});

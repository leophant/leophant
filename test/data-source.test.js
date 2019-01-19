const { expect }     = require('chai');
const { DataSource } = require('./support');

describe('DataSource', () => {
  describe('connector is required', () => {
    it('should throw error when connector is not supplied', () => {
      expect(() => {
        new DataSource({
          "name": "db1",
          // "connector": "mysql",
          "host": "localhost",
          "port": 5432,
          "database": "db1",
          "username": "username",
          "password": "password"
        });
      }).to.throw(Error);
    });

    it('should work when connector is supplied', () => {
      expect(() => {
        new DataSource({
          "name": "db1",
          "connector": "mysql",
          "host": "localhost",
          "port": 5432,
          "database": "db1",
          "username": "username",
          "password": "password"
        });
      }).not.to.throw(Error);
    });
  });
});

const { expect }     = require('chai');
const { DataSource } = require('../support');

const validDataSourceDefinition = {
  name:      'db',
  connector: 'mysql',
  host:      'localhost',
  port:      5432,
  database:  'db',
  username:  'username',
  password:  'password'
};

const dataSourceConstructor = (definition) => {
  return () => {
    new DataSource(definition);
  };
};

describe('DataSource', () => {
  describe('connector is required', () => {
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
});

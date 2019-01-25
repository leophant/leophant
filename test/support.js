const DataSource = require('../lib/data-source');
const Leophant   = require('../lib/leophant');
const Model      = require('../lib/model');

const validDataSourceDefinition = {
  name: 'db',
  connector: 'mysql',
  host: 'localhost',
  port: 5432,
  database: 'db',
  username: 'username',
  password: 'password'
};

const validModelDefinition = {
  name: 'User',
  dataSource: 'db2',
  table: 'users',
  properties: {
    firstName: {
      type: 'string',
      column: 'first_name'
    },
    lastName: {
      type: 'string',
      column: 'last_name'
    },
    email: {
      type: 'string',
      unique: true
    }
  },
  relations: {
    role: {
      type: 'hasOne',
      model: 'Role',
      foreignKey: 'userId'
    },
    files: {
      type: 'hasMany',
      model: 'File',
      foreignKey: 'ownerId'
    }
  }
};

const Support = {
  DataSource,
  Leophant,
  Model,

  validDataSourceDefinition,
  validModelDefinition
};

module.exports = Support;

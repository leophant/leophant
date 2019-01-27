const MySQLConnector = require('leophant-mysql');
const DataSource     = require('../lib/data-source');
const Leophant       = require('../lib/leophant');
const Model          = require('../lib/model');
const Property       = require('../lib/property');
const Relation       = require('../lib/relation');

const validDataSourceDefinition = {
  name: 'db',
  connector: MySQLConnector,
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

const validPropertyName = 'email';

const validPropertyDefinition = {
  type: 'string',
  unique: true
};

const validRelationName = 'files';

const validRelationDefinition = {
  type: 'hasMany',
  model: 'File',
  foreignKey: 'ownerId'
};

const Support = {
  DataSource,
  Leophant,
  Model,
  Property,
  Relation,

  validDataSourceDefinition,
  validModelDefinition,
  validPropertyName,
  validPropertyDefinition,
  validRelationName,
  validRelationDefinition
};

module.exports = Support;

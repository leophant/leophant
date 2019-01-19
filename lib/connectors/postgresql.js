'use strict';

const postgresql = require('pg');

class PostgreSQLConnector {
  constructor(postgresql, definition) {}
}

module.exports = (dataSource) => {
  return new PostgreSQLConnector(postgresql, dataSource.definition);
};

'use strict';

class MySQLConnector {
  constructor(definition) {}
}

module.exports = (dataSource) => {
  return new MySQLConnector(dataSource.definition);
};

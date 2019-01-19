'use strict';

class MySQLConnector {
  constructor(definition) {
    this.client = null;
    this.clientConfig = definition;
  }

  async connect() {}
}

module.exports = (dataSource) => {
  return new MySQLConnector(dataSource.definition);
};

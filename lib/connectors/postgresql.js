'use strict';

const postgresql = require('pg');

class PostgreSQLConnector {
  constructor(postgresql, definition) {
    this.client = null;
    this.clientConfig = definition;
    this.pg = new postgresql.Pool(this.clientConfig);
  }

  async connect() {
    this.client = await this.pg.connect();
    this.client.release();
    return this.client;
  }
}

module.exports = (dataSource) => {
  return new PostgreSQLConnector(postgresql, dataSource.definition);
};

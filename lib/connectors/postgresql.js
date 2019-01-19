'use strict';

const postgresql = require('pg');

class PostgreSQLConnector {
  constructor(postgresql, definition) {
    this.client = null;
    this.clientConfig = definition;
    this.pg = new postgresql.Pool(this.clientConfig);
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.pg.connect((err, client, done) => {
        if(err) {
          return reject(err);
        }

        this.client = client;
        process.nextTick(done);
        resolve(client);
      });
    });
  }
}

module.exports = (dataSource) => {
  return new PostgreSQLConnector(postgresql, dataSource.definition);
};

'use strict';

class Connector {
  constructor(definition) {
    this.client = null;
    this.clientConfig = definition;
  }

  async connect() {}
  async disconnect() {}
}

module.exports = (dataSource) => {
  return new Connector(dataSource.definition);
};

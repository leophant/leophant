'use strict';

class Model {
  constructor(values, options) {}

  static init(definition, options) {
    this.properties = {};
    this.relations = {};
  }

  registerProperty(definition, options) {}
  unregisterProperty(name) {}

  registerRelation(definition, options) {}
  unregisterRelation(name) {}
}

module.exports = Model;

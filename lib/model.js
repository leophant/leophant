'use strict';

const Property = require('./property');
const Relation = require('./relation');

class Model {
  constructor(values, options) {}

  static init(definition, options) {
    this.properties = {};
    this.relations = {};
  }

  registerProperty(name, definition, options) {
    this.properties[name] = new Property(name, definition, options);
    return this.properties[name];
  }

  unregisterProperty(name) {
    delete this.properties[name];
  }

  registerRelation(name, definition, options) {
    this.relations[name] = new Relation(name, definition, options);
    return this.relations[name];
  }

  unregisterRelation(name) {
    delete this.relations[name];
  }
}

module.exports = Model;

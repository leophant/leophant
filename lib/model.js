'use strict';

const Property = require('./property');
const Relation = require('./relation');

class Model {
  constructor(values, options) {}

  static init(definition, options) {
    if(!definition) {
      definition = {};
    }

    const modelClass = class extends Model {};
    modelClass.properties = {};
    modelClass.relations = {};

    if(definition.properties) {
      for(const propertyName in definition.properties) {
        modelClass.registerProperty(propertyName, definition.properties[propertyName], options);
      }
    }

    if(definition.relations) {
      for(const relationName in definition.relations) {
        modelClass.registerRelation(relationName, definition.relations[relationName], options);
      }
    }

    return modelClass;
  }

  static registerProperty(name, definition, options) {
    // TODO: print a warning if the property with such name already exists
    this.properties[name] = new Property(name, definition, options);
    return this.properties[name];
  }

  static unregisterProperty(name) {
    delete this.properties[name];
  }

  static registerRelation(name, definition, options) {
    // TODO: print a warning if the relation with such name already exists
    this.relations[name] = new Relation(name, definition, options);
    return this.relations[name];
  }

  static unregisterRelation(name) {
    delete this.relations[name];
  }
}

module.exports = Model;

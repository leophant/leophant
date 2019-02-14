'use strict';

const ModelValidator = require('./validators/model');
const Property = require('./property');
const PropertyValidator = require('./validators/property');
const Relation = require('./relation');
const RelationValidator = require('./validators/relation');

class Model {
  constructor(values, options) {}

  static init(definition, options) {
    ModelValidator.validateDefinition(definition);

    if(!definition) {
      definition = {};
    }

    const modelClass = class extends Model {};
    modelClass.definition = definition;
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
    PropertyValidator.validateDefinition(definition);

    if(this.properties[name]) {
      console.warn(`WARNING: Property(name='${name}') is already registered in a Model(name='${this.definition.name}')!`);
    }

    this.properties[name] = new Property(name, definition, options);
    return this.properties[name];
  }

  static unregisterProperty(name) {
    delete this.properties[name];
  }

  static registerRelation(name, definition, options) {
    RelationValidator.validateDefinition(definition);

    if(this.relations[name]) {
      console.warn(`WARNING: Relation(name='${name}') is already registered in a Model(name='${this.definition.name}')!`);
    }

    this.relations[name] = new Relation(name, definition, options);
    return this.relations[name];
  }

  static unregisterRelation(name) {
    delete this.relations[name];
  }
}

module.exports = Model;

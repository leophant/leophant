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
        const propertyDefinition = {
          ...definition.properties[propertyName],
          name: propertyName
        };

        modelClass.registerProperty(propertyDefinition, options);
      }
    }

    if(definition.relations) {
      for(const relationName in definition.relations) {
        const relationDefinition = {
          ...definition.relations[relationName],
          name: relationName
        };

        modelClass.registerRelation(relationDefinition, options);
      }
    }

    return modelClass;
  }

  static registerProperty(definition, options) {
    PropertyValidator.validateDefinition(definition);

    if(this.properties[definition.name]) {
      console.warn(`WARNING: Property(name='${definition.name}') is already registered in a Model(name='${this.definition.name}')!`);
    }

    this.properties[definition.name] = new Property(definition, options);
    return this.properties[definition.name];
  }

  static unregisterProperty(name) {
    delete this.properties[name];
  }

  static registerRelation(definition, options) {
    RelationValidator.validateDefinition(definition);

    if(this.relations[definition.name]) {
      console.warn(`WARNING: Relation(name='${definition.name}') is already registered in a Model(name='${this.definition.name}')!`);
    }

    this.relations[definition.name] = new Relation(definition, options);
    return this.relations[definition.name];
  }

  static unregisterRelation(name) {
    delete this.relations[name];
  }
}

module.exports = Model;

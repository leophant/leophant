'use strict';

const RelationValidator = require('./validators/relation');

class Relation {
  constructor(definition, options) {
    RelationValidator.validateDefinition(definition);
  }
}

module.exports = Relation;

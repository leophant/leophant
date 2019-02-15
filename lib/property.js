'use strict';

const PropertyValidator = require('./validators/property');

class Property {
  constructor(definition, options) {
    PropertyValidator.validateDefinition(definition);
  }
}

module.exports = Property;

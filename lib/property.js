'use strict';

const PropertyValidator = require('./validators/property');

class Property {
  constructor(name, definition, options) {
    PropertyValidator.validateDefinition(definition);
  }
}

module.exports = Property;

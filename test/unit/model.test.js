const { expect } = require('chai');
const {
  Model,
  Property,
  Relation,
  validModelDefinition,
  validPropertyName,
  validPropertyDefinition,
  validRelationName,
  validRelationDefinition
} = require('../support');

describe('Model', () => {
  describe('constructor', () => {
    it('should create a model instance', () => {
      const model = new Model();
      expect(model).to.be.an.instanceOf(Model);
    });
  });

  describe('registerProperty', () => {
    it('should register a Property and return it', () => {
      const modelClass = Model.init(validModelDefinition);

      const property = modelClass.registerProperty(validPropertyName, validPropertyDefinition);
      expect(property).to.be.an.instanceOf(Property);
      expect(property).to.equal(modelClass.properties[validPropertyName]);
    });
  });

  describe('unregisterProperty', () => {
    it('should unregister a Property', () => {
      const modelClass = Model.init(validModelDefinition);

      modelClass.registerProperty(validPropertyName, validPropertyDefinition);
      expect(modelClass.properties[validPropertyName]).to.be.an.instanceOf(Property);

      modelClass.unregisterProperty(validPropertyName);
      expect(modelClass.properties[validPropertyName]).to.be.undefined;
    });
  });

  describe('registerRelation', () => {
    it('should register a Relation and return it', () => {
      const modelClass = Model.init(validModelDefinition);

      const relation = modelClass.registerRelation(validRelationName, validRelationDefinition);
      expect(relation).to.be.an.instanceOf(Relation);
      expect(relation).to.equal(modelClass.relations[validRelationName]);
    });
  });

  describe('unregisterRelation', () => {
    it('should unregister a Relation', () => {
      const modelClass = Model.init(validModelDefinition);

      modelClass.registerRelation(validRelationName, validRelationDefinition);
      expect(modelClass.relations[validRelationName]).to.be.an.instanceOf(Relation);

      modelClass.unregisterRelation(validRelationName);
      expect(modelClass.relations[validRelationName]).to.be.undefined;
    });
  });
});

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

  describe('init', () => {
    it('should register properties passed via definition', () => {
      const modelClass = Model.init({
        properties: {
          property1: validPropertyDefinition,
          property2: validPropertyDefinition
        }
      });

      expect(Object.keys(modelClass.properties)).to.have.lengthOf(2);
      expect(modelClass.properties.property1).to.be.an.instanceOf(Property);
      expect(modelClass.properties.property2).to.be.an.instanceOf(Property);
    });

    it('should register relations passed via definition', () => {
      const modelClass = Model.init({
        relations: {
          relation1: validRelationDefinition,
          relation2: validRelationDefinition
        }
      });

      expect(Object.keys(modelClass.relations)).to.have.lengthOf(2);
      expect(modelClass.relations.relation1).to.be.an.instanceOf(Relation);
      expect(modelClass.relations.relation2).to.be.an.instanceOf(Relation);
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

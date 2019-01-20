const { expect } = require('chai');
const { Model } = require('../support');

describe('Model', () => {
  describe('constructor', () => {
    it('should create a model instance', () => {
      const model = new Model();
      expect(model).to.be.an.instanceOf(Model);
    });
  });
});
